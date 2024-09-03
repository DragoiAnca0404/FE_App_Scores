import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MeciuriService } from '../../services/meciuri.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adaugare-meci-nou',
  templateUrl: './adaugare-meci-nou.page.html',
  styleUrls: ['./adaugare-meci-nou.page.scss'],
})
export class AdaugareMeciNouPage implements OnInit {
  meciForm: FormGroup = new FormGroup({});
  activitati: any[] = [];
  echipeList: any[] = [];
  errorMessage: string | null = null;
  submitted: boolean = false; // Indicator de trimitere
  echipeIdentice: boolean = false; // Indicator pentru echipe identice
  meciDenumire: string = '';

  constructor(
    private fb: FormBuilder,
    private meciuriService: MeciuriService,
    private router: Router,
    private http: HttpClient
  ) {}


  ngOnInit() {
    this.meciForm = this.fb.group({
      denumireActivitate: ['', Validators.required],
      denumireMeci: ['', Validators.required],
      dataMeci: ['', Validators.required],
      echipe: this.fb.array([
        this.createEchipa(),
        this.createEchipa()
      ], Validators.required)
    });

    this.http.get<any[]>('https://swagger.metasoft3d.ro/api/GestionareMeciuri/VizualizareActivitati').subscribe(
      (data: any[]) => {
        this.activitati = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Eroare la obținerea activităților', error);
        this.errorMessage = 'Eroare la obținerea activităților';
      }
    );

    this.http.get<any[]>('https://swagger.metasoft3d.ro/api/GestionareMeciuri/VizualizareEchipe').subscribe(
      (data: any[]) => {
        this.echipeList = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Eroare la obținerea echipei', error);
        this.errorMessage = 'Eroare la obținerea echipei';
      }
    );
  }

  createEchipa(): FormGroup {
    return this.fb.group({
      denumireEchipa: ['', Validators.required],
      scor: [0, Validators.required]
    });
  }

  echipe(): FormArray {
    return this.meciForm.get('echipe') as FormArray;
  }

  addEchipa() {
    this.echipe().push(this.createEchipa());
  }

  removeEchipa(index: number) {
    if (this.echipe().length > 2) {
      this.echipe().removeAt(index);
    }
  }

  validateEchipe() {
    const echipeControls = this.echipe().controls;
    const selectedEchipe = echipeControls.map(control => control.get('denumireEchipa')?.value);
    this.echipeIdentice = false;
  
    echipeControls.forEach((control, index) => {
      const echipaControl = control.get('denumireEchipa');
  
      if (echipaControl) {
        const isDuplicate = selectedEchipe.filter((value, idx) => value === echipaControl.value && idx !== index).length > 0;
        
        if (isDuplicate) {
          echipaControl.setErrors({ duplicate: true });
          this.echipeIdentice = true;
        } else {
          if (!echipaControl.value) {
            echipaControl.setErrors({ required: true });
          } else {
            echipaControl.setErrors(null);
          }
        }
  
        echipaControl.updateValueAndValidity();
      }
    });
  }
  
  
  

  onSubmit() {
    this.submitted = true;
    this.validateEchipe(); // Validează echipele înainte de trimitere

    this.meciForm.markAllAsTouched();


    if (this.meciForm.valid && !this.echipeIdentice) {
      const formValue = this.meciForm.value;
      this.meciuriService.addMeci(formValue).subscribe(
        response => {
          this.meciuriService.setMeciDenumire(this.meciForm.get('denumireMeci')?.value);
          console.log('Meci adăugat cu succes!', response);
          this.router.navigate(['/success-msg-add-meci']);
        },
        error => {
          console.error('Eroare la adăugarea meciului!', error);
          this.errorMessage = 'Eroare la adăugarea meciului!';
        }
      );
    } else {
      console.log('Formular invalid sau echipe identice', this.meciForm);
    }
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }
}

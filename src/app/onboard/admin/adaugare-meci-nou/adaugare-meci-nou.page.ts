import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  showCalendar: boolean = false;
  activitati: any[] = [];
  echipeList: any[] = [];
  errorMessage: string | null = null;

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

    this.http.get<any[]>('https://localhost:44312/api/GestionareMeciuri/VizualizareActivitati').subscribe(
      (data: any[]) => {
        this.activitati = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Eroare la obținerea activităților', error);
        this.errorMessage = 'Eroare la obținerea activităților';
      }
    );

    this.http.get<any[]>('https://localhost:44312/api/GestionareMeciuri/VizualizareEchipe').subscribe(
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
      this.echipe().removeAt(index); // Elimină echipa la indexul specificat
    }
  }

  onSubmit() {
    if (this.meciForm.valid) {
      const formValue = this.meciForm.value;
      this.meciuriService.addMeci(formValue).subscribe(
        response => {
          console.log('Meci adăugat cu succes!', response);
          this.router.navigate(['/success-msg-register']);
        },
        error => {
          console.error('Eroare la adăugarea meciului!', error);
          this.errorMessage = 'Eroare la adăugarea meciului!';
        }
      );
    }
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }

  openCalendar() {
    this.showCalendar = true;
  }
}

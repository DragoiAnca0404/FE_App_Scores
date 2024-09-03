import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MeciuriService } from '../../services/meciuri.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adaugare-echipa',
  templateUrl: './adaugare-echipa.page.html',
  styleUrls: ['./adaugare-echipa.page.scss'],
})
export class AdaugareEchipaPage implements OnInit {
  echipaForm: FormGroup = new FormGroup({});
  users: any[] = [];
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private meciuriService: MeciuriService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.echipaForm = this.fb.group({
      denumireEchipa: ['', [Validators.required, this.noWhitespaceValidator, 
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')]],
      users: ['', Validators.required] 
    });

    this.http.get<any[]>('https://swagger.metasoft3d.ro/api/GestionareMeciuri/VizualizareUtilizatori').subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Eroare la obținerea utilizatorilor', error);
        this.errorMessage = 'Eroare la obținerea utilizatorilor';
      }
    );
  }

  public noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { 'whitespace': true };       
  }

  onSubmit() {
    if (this.echipaForm.invalid) {
      return;
    }

    const formValue = this.echipaForm.value;

    const denumireEchipaTrimmed = formValue.denumireEchipa.trim();


    const echipaPayload = {
      denumireEchipa: denumireEchipaTrimmed,
      usernames: formValue.users
    };

    this.meciuriService.addEchipa(echipaPayload).subscribe(
      response => {
        console.log('Echipă adăugată cu succes!', response);
        this.router.navigate(['/success-msg-add-echipa']);
      },
      (error: HttpErrorResponse) => {
        console.error('Eroare la adăugarea echipei', error);
        this.errorMessage = 'Eroare la adăugarea echipei';
      }
    );
  }
}

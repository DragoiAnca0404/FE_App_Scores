import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ) { }

  ngOnInit() {
    this.echipaForm = this.fb.group({
      denumireEchipa: ['', Validators.required],
      users: ['', Validators.required] 
    });

    this.http.get<any[]>('https://localhost:44312/api/GestionareMeciuri/VizualizareUtilizatori').subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Eroare la obținerea utilizatorilor', error);
        this.errorMessage = 'Eroare la obținerea utilizatorilor';
      }
    );
  }

  onSubmit() {
    const formValue = this.echipaForm.value;

    // Pregătim obiectul conform cerințelor API-ului
    const echipaPayload = {
      denumireEchipa: formValue.denumireEchipa,
      usernames: formValue.users // Array de utilizatori selectați
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

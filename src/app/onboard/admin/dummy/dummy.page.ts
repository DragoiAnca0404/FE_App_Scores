import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.page.html',
  styleUrls: ['./dummy.page.scss'],
})
export class DummyPage implements OnInit {

  private apiUrl = 'https://192.168.1.134/api/Admin/employees';
  // private baseUrlLogin = 'https://192.168.1.134/api/Authentication';


 // private apiUrl = 'https://localhost:44312/api/Admin/employees';
  employees: string[] = []; // Array pentru a stoca datele angajaților
  errorMessage: string = ''; // Variabilă pentru a stoca mesajele de eroare

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadEmployees(); // Încarcă angajații când componenta este inițializată
  }

  getEmployees(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  loadEmployees(): void {
    this.getEmployees().subscribe(
      data => {
        this.employees = data; // Stochează datele în variabila `employees`
      },
      error => {
        this.errorMessage = 'A apărut o eroare la încărcarea angajaților.'; // Gestionează erorile
        console.error('Error fetching employees', error); // Loghează eroarea în consolă
      }
    );
  }
}

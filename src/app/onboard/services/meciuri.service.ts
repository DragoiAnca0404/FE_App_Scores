import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeciuriService {
  private apiUrl = 'https://localhost:44312/api/GestionareMeciuri';

  constructor(private http: HttpClient) { }

  getMeciuri(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getActivitati(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/VizualizareActivitati`);
  }

  getMeci(denumireMeci: string): Observable<any> {
    const url = `${this.apiUrl}/${denumireMeci}`;
    return this.http.get<any>(url);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeciuriService {
  private apiUrl = 'https://localhost:44312/api/GestionareMeciuri';
  private apiUrlAdd = 'https://localhost:44312/api/GestionareMeciuri/add';


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

  getMeciuriByActivitate(denumireSport: string): Observable<any[]> {
    const url = `${this.apiUrl}/activitate`;
    const params = new HttpParams().set('DenumireActivitate', denumireSport);
  
    return this.http.get<any[]>(url, { params });
  }


  getScoruri(denumireMeci: string, data: string): Observable<any[]> {
    const params = new HttpParams()
      .set('DenumireMeci', denumireMeci)
      .set('data', data);

    return this.http.get<any[]>(`${this.apiUrl}/scoruri`, { params });
  }

  addMeci(meci: any): Observable<any> {
    return this.http.post<any>(this.apiUrlAdd, meci);
  }
  
}

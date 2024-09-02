import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeciuriService {
  private apiUrl = 'https://swagger.metasoft3d.ro/api/GestionareMeciuri';
  private apiUrlAdd = 'https://swagger.metasoft3d.ro/api/GestionareMeciuri/add';

  meciDenumire: string = '';

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

  
  addEchipa(echipa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Create`, echipa, { responseType: 'text' as 'json' });
  }

  setMeciDenumire(value: string) {
    this.meciDenumire = value;
  }

  getMeciDenumire() {
    return this.meciDenumire;
  }
  
}

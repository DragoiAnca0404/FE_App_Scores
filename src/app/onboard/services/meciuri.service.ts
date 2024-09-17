import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeciResponse } from 'src/app/models/meci-response';

@Injectable({
  providedIn: 'root'
})
export class MeciuriService {
  //private apiUrl = 'https://swagger.metasoft3d.ro/api/GestionareMeciuri';

  private apiUrl ='https://localhost:7271/api/GestionareMeciuri';
  private apiUrlAdd = 'https://swagger.metasoft3d.ro/api/GestionareMeciuri/add';

    //https://localhost:7271/api/GestionareMeciuri/meciuri/private-access


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

  getMeciScor(DenumireMeci: string, data: string): Observable<any> {
    return this.http.get(`https://localhost:7271/api/GestionareMeciuri/meciuri?DenumireMeci=${DenumireMeci}&data=${data}`);
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

  validatePrivateMeci(meciId: number, code: string): Observable<MeciResponse> {
    const url = `${this.apiUrl}/meciuri/private-access`;
    const body = { meciId, code };
    return this.http.post<MeciResponse>(url, body);
  }
  //https://localhost:7271/api/GestionareMeciuri/meciuri/private-access
  
}

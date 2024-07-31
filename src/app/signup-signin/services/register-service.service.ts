import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private apiUrl = 'https://localhost:44312/api'; // Înlocuiți cu URL-ul real al API-ului vostru
  private apiUrlPost = 'https://localhost:44312/api/Authentication/login'; // Înlocuiți cu URL-ul real al API-ului vostru

//https://localhost:44312/api/Authentication/register?role=HR
  constructor(private http: HttpClient) { }

  registerUser(user: any, role: string): Observable<any> {
    const url = `${this.apiUrl}/Authentication/register?role=${role}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, user, { headers: headers });
  }



  //login

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(this.apiUrlPost, body, { headers: headers });
  }

  login2FA(username: string, code: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('code', code);

    return this.http.post(`${this.apiUrl}/Authentication/login-2FA`, { params });
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import * as jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private apiUrl = 'https://localhost:44312/api'; // URL-ul API-ului
  private baseUrlLogin = 'https://localhost:44312/api/Authentication';
  private username: any;

  constructor(private http: HttpClient) { }


  private UserRole    = new BehaviorSubject<any>(localStorage.getItem('role'));


  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }


  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }


  registerUser(user: any, role: string): Observable<any> {
    const url = `${this.apiUrl}/Authentication/register?role=${role}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, user, { headers: headers, withCredentials: true });
  }

  login2(credentials: { username: string, password: string }): Observable<any> {
    const url = `${this.baseUrlLogin}/login`;
    return this.http.post(url, credentials, { withCredentials: true });
  }

  login2FA(credentials: { username: string, code: string }): Observable<any> {
    const url = `${this.baseUrlLogin}/login-2FA`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, credentials, { headers: headers, withCredentials: true });
  }
}
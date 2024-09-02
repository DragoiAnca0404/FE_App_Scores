import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-2-fa',
  templateUrl: './login-2-fa.page.html',
  styleUrls: ['./login-2-fa.page.scss'],
})
export class Login2FAPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  private role: string = '';


  constructor(
    private fb: FormBuilder,
    private authService: RegisterServiceService,
    private navCtrl: NavController,
    private jwtHelper: JwtHelperService
  ) {
    this.loginForm = this.fb.group({
      code: this.fb.array(
        Array(6).fill('').map(() => this.fb.control('', Validators.required))
      )
    });
  }

  ngOnInit() { }

  get code(): FormArray {
    return this.loginForm.get('code') as FormArray;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      const code = loginData.code.join('');
      const credentials = {
        username: this.authService.getUsername(),
        code: code
      };
      this.authService.login2FA(credentials).subscribe(
        response => {
          console.log('Login 2FA successful', response);
          const token = response.token;
          localStorage.setItem('authToken', token);
          this.decodeToken(token);
          this.navCtrl.navigateForward('/vizualizare-activitati');
        },
        error => {
          console.error('Login 2FA failed', error);
          this.errorMessage = 'Credențiale invalide. Vă rugăm să încercați din nou.';
        }
      );
    }
  }

  private decodeToken(token: string): void {
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.role = decodedToken.role;  // Presupunem că rolul este în token
  }


}



import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-2-fa',
  templateUrl: './login-2-fa.page.html',
  styleUrls: ['./login-2-fa.page.scss'],
})
export class Login2FAPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: RegisterServiceService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      code: this.fb.array(
        Array(6).fill('').map(() => this.fb.control('', Validators.required))
      )
    });
  }

  ngOnInit() {}

  get code(): FormArray {
    return this.loginForm.get('code') as FormArray;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      const code = loginData.code.join(''); // Asigură-te că `code` este un string
      const credentials = {
        username: loginData.username,
        code: code
      };
      this.authService.login2FA(credentials).subscribe(
        response => {
          console.log('Login 2FA successful', response);
          const token = response.token;
          localStorage.setItem('authToken', token);
          this.navCtrl.navigateForward('/dummy');
        },
        error => {
          console.error('Login 2FA failed', error);
          this.errorMessage = 'Credențiale invalide. Vă rugăm să încercați din nou.';
        }
      );
    }
  }


}



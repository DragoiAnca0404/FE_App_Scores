import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../services/register-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  loginForm: FormGroup = new FormGroup({}); // Inițializare
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: RegisterServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }



  onLogin() {
    if (this.loginForm.valid) {
      const loginData = {
        usernameOrEmail: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
  
      this.authService.login2(loginData).subscribe(
        response => {
          this.authService.setUsername(this.loginForm.value.username); // Salvăm numele de utilizator
          console.log('Login successful', response);
          this.navCtrl.navigateForward('/login-2-fa');
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Credențiale invalide. Vă rugăm să încercați din nou.';
        }
      );
    }
  }
}  
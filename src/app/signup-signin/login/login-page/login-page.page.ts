import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  username: any;
  password: any;

  constructor(private authService: RegisterServiceService, private router: Router) { }

  ngOnInit(  ) {
  }




  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/login-2-fa']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
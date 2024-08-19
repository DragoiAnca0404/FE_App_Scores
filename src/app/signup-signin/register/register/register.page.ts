import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from '../../services/register-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: RegisterServiceService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*\d)(?=.*[\W_])(?=.*[A-Z]).{6,}$/) // Pattern to ensure at least one number, one special character, and one uppercase letter

      ]]
    });
  }

  ngOnInit() { }

  onRegister() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      const role = 'User'; 
      this.authService.registerUser(user, role).subscribe(
        response => {
          console.log('User registered successfully', response);
          this.router.navigate(['/success-msg-register']);
        },
        error => {
          console.error('Error registering user', error);
        }
      );
    }
  }

}

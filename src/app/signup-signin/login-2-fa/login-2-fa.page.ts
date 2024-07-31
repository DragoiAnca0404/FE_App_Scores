import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-2-fa',
  templateUrl: './login-2-fa.page.html',
  styleUrls: ['./login-2-fa.page.scss'],
})
export class Login2FAPage {

  digits: string[] = ['', '', '', '', '', ''];

  constructor(    private authService: RegisterServiceService,  private router: Router  ) {}

  onKeyUp(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < this.digits.length - 1) {
      // Move to the next input field
      const nextInput = document.getElementById(`digit-${index + 1}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && index > 0 && input.value.length === 0) {
      // Move to the previous input field if Backspace is pressed and the current field is empty
      const previousInput = document.getElementById(`digit-${index - 1}`) as HTMLInputElement;
      if (previousInput) {
        previousInput.focus();
      }
    }
  }


  onSubmit() {
    const code = this.digits.join('');
    if (code.length === 6) {
      this.authService.login2FA('Anca', code).subscribe(
        response => {
          this.router.navigate(['/success-msg-register']);
        },
        error => {
          // Gestionează eroarea
          alert('Autentificare eșuată. Verifică codul și încearcă din nou.');
        }
      );
    } else {
      alert('Introdu toate cele 6 cifre.');
    }
  }
}









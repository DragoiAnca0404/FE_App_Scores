import { Component, OnInit, ViewChildren, QueryList, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NavController, IonInput } from '@ionic/angular';
import { RegisterServiceService } from '../services/register-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-2-fa',
  templateUrl: './login-2-fa.page.html',
  styleUrls: ['./login-2-fa.page.scss'],
})
export class Login2FAPage implements OnInit {

  @ViewChildren('codeInput') codeInputs!: QueryList<IonInput>;

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

  moveFocus(index: number, direction: 'next' | 'prev') {
    const inputsArray = this.codeInputs.toArray();
    if (direction === 'next' && index < inputsArray.length - 1) {
      inputsArray[index + 1].setFocus();
    } else if (direction === 'prev' && index > 0) {
      inputsArray[index - 1].setFocus();
    }
  }

  handleInput(event: any, index: number) {
    const input = event.target.value;

    if (input.length === 1) {
      this.code.at(index).setValue(input);
      this.moveFocus(index, 'next');
    } else if (input.length > 1) {
      this.code.at(index).setValue(input.charAt(0));
      if (index < this.code.length - 1) {
        this.code.at(index + 1).setValue(input.slice(1));
        this.moveFocus(index, 'next');
      }
    }
  }

  handleKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      this.moveFocus(index, 'prev');
    } else if (event.key === 'ArrowRight' && index < this.code.length - 1) {
      event.preventDefault();
      this.moveFocus(index, 'next');
    } else if (event.key === 'Backspace') {
      this.handleBackspace(index, event);
    }
  }

  handleBackspace(index: number, event: KeyboardEvent) {
    const currentInput = this.code.at(index).value;

    if (event.key === 'Backspace') {
      event.preventDefault();

      if (currentInput === '' && index > 0) {
        this.code.at(index - 1).setValue('');
        this.moveFocus(index, 'prev');
      } else {
        this.code.at(index).setValue('');
      }
    }
  }

  @HostListener('window:paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedData = (event.clipboardData || (window as any).clipboardData).getData('text');
    this.fillInputs(pastedData);
  }

  private fillInputs(code: string) {
    const inputsArray = this.codeInputs.toArray();
    let currentIndex = 0;

    for (const char of code) {
      while (currentIndex < this.code.length && this.code.at(currentIndex).value) {
        currentIndex++;
      }

      if (currentIndex < this.code.length) {
        this.code.at(currentIndex).setValue(char);
        currentIndex++;
      }
    }

    this.codeInputs.toArray()[Math.min(currentIndex, inputsArray.length) - 1]?.setFocus();
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
    this.role = decodedToken.role;
  }
}
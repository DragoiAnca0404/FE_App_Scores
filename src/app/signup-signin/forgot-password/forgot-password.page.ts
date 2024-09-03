import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private http: HttpClient, private alertController: AlertController) {}

  async resetPassword() {
    if (!this.email) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter a valid email address.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const url = `https://localhost:7271/api/Authentication/forgot-password?email=${encodeURIComponent(this.email)}`;

    this.http.post(url, {}).subscribe(
      async () => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Password reset instructions have been sent to your email.',
          buttons: ['OK'],
        });
        await alert.present();
      },
      async () => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Failed to send password reset email. Please try again later.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  password: string = '';
  confirmPassword: string = '';
  token: string = '';
  email: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Fetching token and email from the query parameters in the URL
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
  }

  async submitReset() {
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Eroare',
        message: 'Parolele nu se potrivesc.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const url = 'https://localhost:7271/api/Authentication/reset-password';

    const body = {
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email,
      token: this.token
    };

    this.http.post(url, body).subscribe(
      async () => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Parola ta a fost resetată cu succes.',
          buttons: ['OK'],
        });
        await alert.present();
      },
      async () => {
        const alert = await this.alertController.create({
          header: 'Eroare',
          message: 'Nu s-a reușit resetarea parolei. Vă rugăm să încercați din nou.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}


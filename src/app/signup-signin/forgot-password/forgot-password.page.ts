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
        header: 'Eroare',
        message: 'Vă rugăm să introduceți o adresă de email validă.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const url = `https://swagger.metasoft3d.ro/api/Authentication/forgot-password?email=${encodeURIComponent(this.email)}`;

    this.http.post(url, {}).subscribe(
      async () => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Instrucțiunile pentru resetarea parolei au fost trimise pe emailul dumneavoastră.',
          buttons: ['OK'],
        });
        await alert.present();
      },
      async () => {
        const alert = await this.alertController.create({
          header: 'Eroare',
          message: 'Nu s-a reușit trimiterea emailului pentru resetarea parolei. Vă rugăm să încercați din nou mai târziu.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}

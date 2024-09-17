import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/signup-signin/services/register-service.service';

@Component({
  selector: 'app-vizualizare-meciuri',
  templateUrl: './vizualizare-meciuri.page.html',
  styleUrls: ['./vizualizare-meciuri.page.scss'],
})
export class VizualizareMeciuriPage implements OnInit {
  meciuriPublice: any[] = [];
  meciuriPrivate: any[] = [];
  denumireSport!: string | null;
  isAdmin: boolean = false;
  afisare: string = 'publice';
  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService,
    private router: Router,
    private authService: RegisterServiceService
  ) { }

  ngOnInit(): void {
    const role = this.authService.getRole();
    this.isAdmin = role === 'Admin';

    this.denumireSport = this.route.snapshot.paramMap.get('denumireSport');

    if (this.denumireSport) {
      this.meciuriService.getMeciuriByActivitate(this.denumireSport).subscribe(data => {
        this.meciuriPublice = data.filter((meci: any) => meci.tip_meci === 'Public');
        this.meciuriPrivate = data.filter((meci: any) => meci.tip_meci === 'Privat');
      });
    } else {
      console.error('Parametrul denumireSport este null');
    }
  }

  afiseazaMeciuri(tipMeci: string): void {
    this.afisare = tipMeci;
  }

  selectMeci(meci: any): void {
    const denumireMeci = meci.denumire_meciuri;
    const data = meci.data;

    if (meci.tip_meci === 'Public') {
      this.router.navigate(['/vizualizare-scoruri'], { queryParams: { denumireMeci, data } });
    } else {
      this.meciuriService.getMeciScor(denumireMeci, data).subscribe(
        meciId => {
          this.router.navigate(['/cod-acces-meci'], { queryParams: { denumireMeci, data, meciId: meciId.meciId } });
        },
        error => {
          console.error('Eroare la obținerea meciId:', error);
        }
      );
    }
  }
}

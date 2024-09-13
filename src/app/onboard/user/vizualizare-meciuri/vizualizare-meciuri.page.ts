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
  meciuri: any[] = [];
  scoruri: any[] = [];
  denumireSport!: string | null;
  isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService,
    private router: Router,
    private authService: RegisterServiceService
  ) { }

  ngOnInit(): void {
    const role = this.authService.getRole();
    console.log('User role:', role);
    this.isAdmin = role === 'Admin';
    console.log('isAdmin:', this.isAdmin);

    this.denumireSport = this.route.snapshot.paramMap.get('denumireSport');

    if (this.denumireSport) {
      this.meciuriService.getMeciuriByActivitate(this.denumireSport).subscribe(data => {
        console.log('Meciuri primite:', data);
        this.meciuri = data;
      });
    } else {
      console.error('Parametrul denumireSport este null');
    }
  }

  selectMeci(meci: any): void {
    const denumireMeci = meci.denumire_meciuri;
    const data = meci.data;
    this.router.navigate(['/vizualizare-scoruri'], { queryParams: { denumireMeci, data } });
  }
}
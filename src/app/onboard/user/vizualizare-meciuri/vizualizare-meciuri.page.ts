import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vizualizare-meciuri',
  templateUrl: './vizualizare-meciuri.page.html',
  styleUrls: ['./vizualizare-meciuri.page.scss'],
})
export class VizualizareMeciuriPage implements OnInit {
  meciuri: any[] = [];
  scoruri: any[] = []; // To store the scores of the selected match
  denumireSport!: string | null;

  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService,
    private router: Router  // Inject Router service

  ) {}

  ngOnInit(): void {
    this.denumireSport = this.route.snapshot.paramMap.get('denumireSport');

    if (this.denumireSport) {
      this.meciuriService.getMeciuriByActivitate(this.denumireSport).subscribe(data => {
        console.log('Meciuri primite:', data);
        this.meciuri = data;
      });
    } else {
      console.error('Parametrul denumireSport este null');
      // Handle the case where 'denumireSport' is null
    }
  }

  selectMeci(meci: any): void {
    const denumireMeci = meci.denumire_meciuri;
    const data = meci.data;
    this.router.navigate(['/vizualizare-scoruri'], { queryParams: { denumireMeci, data } });
  }
}
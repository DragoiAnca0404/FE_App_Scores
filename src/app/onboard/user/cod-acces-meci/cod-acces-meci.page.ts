import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeciuriService } from '../../services/meciuri.service';
import { MeciResponse } from 'src/app/models/meci-response';
@Component({
  selector: 'app-cod-acces-meci',
  templateUrl: './cod-acces-meci.page.html',
  styleUrls: ['./cod-acces-meci.page.scss'],
})
export class CodAccesMeciPage implements OnInit {
  code: string = '';
  denumireMeci!: string;
  data!: string;
  meciId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meciuriService: MeciuriService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.denumireMeci = params['denumireMeci'];
      this.data = params['data'];
      this.meciId = params['meciId'];
    });
  }

  submitCode(): void {
    this.meciuriService.validatePrivateMeci(this.meciId, this.code).subscribe((response: any) => {
      if (response.status === 'Success') {
        const scoruri = response.data;  
        console.log('Scoruri și echipe:', scoruri);

        this.router.navigate(['/vizualizare-scoruri'], {
          queryParams: {
            denumireMeci: this.denumireMeci,
            data: this.data,
            scoruri: JSON.stringify(scoruri)  
          }
        });
      } else {
        console.error('Cod invalid sau eroare de autentificare');
      }
    });
  }
}
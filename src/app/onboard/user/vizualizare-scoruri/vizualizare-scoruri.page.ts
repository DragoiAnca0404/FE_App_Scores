import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { ActivatedRoute } from '@angular/router';

interface MeciDetaliu {
  scorul: number;
  data: string;
  activitate: string;
  echipa: string;
}

@Component({
  selector: 'app-vizualizare-scoruri',
  templateUrl: './vizualizare-scoruri.page.html',
  styleUrls: ['./vizualizare-scoruri.page.scss'],
})
export class VizualizareScoruriPage implements OnInit {
  scoruri: any[] = [];
  denumireMeci!: string;
  data!: string;

  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.denumireMeci = params['denumireMeci'];
      this.data = params['data'];

      this.meciuriService.getScoruri(this.denumireMeci, this.data).subscribe(data => {
        console.log('Scoruri primite:', data);
        this.scoruri = data;
      });
    });
  }
}
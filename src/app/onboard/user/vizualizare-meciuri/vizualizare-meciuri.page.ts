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
  selector: 'app-vizualizare-meciuri',
  templateUrl: './vizualizare-meciuri.page.html',
  styleUrls: ['./vizualizare-meciuri.page.scss'],
})
export class VizualizareMeciuriPage implements OnInit {
  denumireMeci: string = '';
  detaliiMeci: MeciDetaliu[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService
  ) {}

  ngOnInit() {
    this.denumireMeci = this.route.snapshot.paramMap.get('denumireMeci')!;
    this.meciuriService.getMeci(this.denumireMeci).subscribe((data: MeciDetaliu[]) => {
      this.detaliiMeci = data;
    });
  }
}

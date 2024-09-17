import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeciuriService } from '../../services/meciuri.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vizualizare-scoruri',
  templateUrl: './vizualizare-scoruri.page.html',
  styleUrls: ['./vizualizare-scoruri.page.scss'],
})
export class VizualizareScoruriPage implements OnInit {
  scoruri: any[] = [];
  denumireMeci!: string;
  data!: string;
  rezultatMeci: string = '';  

  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.denumireMeci = params['denumireMeci'];
      this.data = params['data'];

      const scoruriString = params['scoruri'];
      if (scoruriString) {
        this.scoruri = JSON.parse(scoruriString);
        console.log('Scoruri și echipe pentru meci privat:', this.scoruri);
      } else {
        this.meciuriService.getMeciScor(this.denumireMeci, this.data).subscribe(data => {
          this.scoruri = data;
          console.log('Scoruri și echipe pentru meci public:', this.scoruri);
        });
      }

      const url = `https://localhost:7271/api/GestionareMeciuri/Maxscoruri?DenumireMeci=${encodeURIComponent(this.denumireMeci)}&data=${encodeURIComponent(this.data)}`;
      this.http.get(url, { responseType: 'text' }).subscribe((response: string) => {
        this.rezultatMeci = response;
        console.log('Rezultatul meciului:', this.rezultatMeci);
      }, error => {
        console.error('Eroare la apelarea API-ului pentru câștigător:', error);
      });
    });
  }
}


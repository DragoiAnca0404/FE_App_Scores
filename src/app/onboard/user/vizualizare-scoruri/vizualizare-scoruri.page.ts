import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { ActivatedRoute } from '@angular/router';
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
  rezultatMeci: string = '';  // Variabilă pentru mesajul câștigătorului

  constructor(
    private route: ActivatedRoute,
    private meciuriService: MeciuriService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.denumireMeci = params['denumireMeci'];
      this.data = params['data'];

      // Apel pentru scoruri
      this.meciuriService.getScoruri(this.denumireMeci, this.data).subscribe(data => {
        console.log('Scoruri primite:', data);
        this.scoruri = data;
      });

      // Apel pentru determinarea câștigătorului
      const url = `https://swagger.metasoft3d.ro/api/GestionareMeciuri/Maxscoruri?DenumireMeci=${encodeURIComponent(this.denumireMeci)}&data=${encodeURIComponent(this.data)}`;
      this.http.get(url, { responseType: 'text' }).subscribe((response: string) => {
        console.log('Răspuns API câștigător:', response);
        this.rezultatMeci = response;
      }, error => {
        console.error('Eroare la apelarea API-ului pentru câștigător:', error);
      });
    });
  }
}

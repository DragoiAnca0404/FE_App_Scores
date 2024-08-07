import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vizualizare-activitati',
  templateUrl: './vizualizare-activitati.page.html',
  styleUrls: ['./vizualizare-activitati.page.scss'],
})
export class VizualizareActivitatiPage implements OnInit {


  activitati: any[] = [];
  viewMode: string = 'list'; // 'list' sau 'grid'

  constructor(private meciuriService: MeciuriService, private router: Router) { }

  ngOnInit(): void {
    this.meciuriService.getActivitati().subscribe(data => {
      console.log('Datele primite:', data); 
      this.activitati = data;
    });
  }

  onAddClick() {
    // Logică pentru adăugarea unui nou meci
  }


  onMeciClick(denumireSport: string) {
    this.router.navigate(['/vizualizare-meciuri', denumireSport]);
  }
}

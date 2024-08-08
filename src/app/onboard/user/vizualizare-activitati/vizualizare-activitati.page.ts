import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/signup-signin/services/register-service.service';

@Component({
  selector: 'app-vizualizare-activitati',
  templateUrl: './vizualizare-activitati.page.html',
  styleUrls: ['./vizualizare-activitati.page.scss'],
})
export class VizualizareActivitatiPage implements OnInit {

  isAdmin: boolean = false;
  activitati: any[] = [];
  viewMode: string = 'list'; // 'list' sau 'grid'

  constructor(private meciuriService: MeciuriService, private router: Router,    private authService: RegisterServiceService,
  ) { }

  ngOnInit(): void {
    const role = this.authService.getRole();
    console.log('User role:', role); // Adaugă log pentru a verifica rolul
    this.isAdmin = role === 'admin';
    console.log('isAdmin:', this.isAdmin); // Adaugă log pentru a verifica isAdmin
    this.meciuriService.getActivitati().subscribe(data => {
      console.log('Datele primite:', data); 
      this.activitati = data;
    });    this.meciuriService.getActivitati().subscribe(data => {
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

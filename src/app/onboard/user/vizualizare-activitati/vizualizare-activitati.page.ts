import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/signup-signin/services/register-service.service';

@Component({
  selector: 'app-vizualizare-activitati',
  templateUrl: './vizualizare-activitati.page.html',
  styleUrls: ['./vizualizare-activitati.page.scss'],
})
export class VizualizareActivitatiPage implements OnInit  {

  isAdmin: boolean = false;
  activitati: any[] = [];
  viewMode: string = 'list'; // 'list' sau 'grid'
  isLoading = false;


  constructor(private meciuriService: MeciuriService, private router: Router,    private authService: RegisterServiceService,
  ) { }

  ngOnInit(): void {
    const role = this.authService.getRole();
    console.log('User role:', role); // Adaugă log pentru a verifica rolul
    this.isAdmin = role === 'Admin';
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
    // Activează ecranul de încărcare
    this.isLoading = true;

    // Simulează o întârziere de 5 secunde pentru demonstrație
    setTimeout(() => {
      // Ascunde ecranul de încărcare după 5 secunde
      this.isLoading = false;

      // Navighează la pagina de vizualizare a meciurilor
      this.router.navigate(['/vizualizare-meciuri', denumireSport]);
    }, 5000);
  }
}

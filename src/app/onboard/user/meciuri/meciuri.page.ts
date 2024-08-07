import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meciuri',
  templateUrl: './meciuri.page.html',
  styleUrls: ['./meciuri.page.scss'],
})
export class MeciuriPage implements OnInit {

  meciuri: any[] = [];
  viewMode: string = 'list'; // 'list' sau 'grid'

  constructor(private meciuriService: MeciuriService, private router: Router) { }

  ngOnInit(): void {
    this.meciuriService.getMeciuri().subscribe(data => {
      this.meciuri = data;
    });
  }

  onAddClick() {
    // Logică pentru adăugarea unui nou meci
  }


  onMeciClick(denumireMeci: string) {
    this.router.navigate(['/vizualizare-meciuri', denumireMeci]);
  }

}
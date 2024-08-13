import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeciuriService } from '../../services/meciuri.service';

@Component({
  selector: 'app-adaugare-meci-nou',
  templateUrl: './adaugare-meci-nou.page.html',
  styleUrls: ['./adaugare-meci-nou.page.scss'],
})
export class AdaugareMeciNouPage implements OnInit {
  //meciForm: FormGroup;
  meciForm: FormGroup = new FormGroup({}); // Inițializare

  constructor(private fb: FormBuilder, private meciuriService: MeciuriService) {}

  ngOnInit() {
    this.meciForm = this.fb.group({
      denumireActivitate: ['', Validators.required],
      denumireMeci: ['', Validators.required],
      dataMeci: ['', Validators.required],
      denumireEchipa: ['', Validators.required],
      scor: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.meciForm.valid) {
      const formValue = this.meciForm.value;
      const meci = {
        denumireActivitate: formValue.denumireActivitate,
        denumireMeci: formValue.denumireMeci,
        dataMeci: formValue.dataMeci,
        echipe: [
          {
            denumireEchipa: formValue.denumireEchipa,
            scor: formValue.scor
          }
        ]
      };
      this.meciuriService.addMeci(meci).subscribe(response => {
        console.log('Meci adăugat cu succes!', response);
      }, error => {
        console.error('Eroare la adăugarea meciului!', error);
      });
    }
  }
}
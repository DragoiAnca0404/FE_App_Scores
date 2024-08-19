import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';

@Component({
  selector: 'app-success-msg-add-meci',
  templateUrl: './success-msg-add-meci.page.html',
  styleUrls: ['./success-msg-add-meci.page.scss'],
})
export class SuccessMsgAddMeciPage implements OnInit {
  meciDenumire: string = '';

  constructor(private meciService: MeciuriService) { }

  ngOnInit() {
    this.meciDenumire = this.meciService.getMeciDenumire();
  }

}

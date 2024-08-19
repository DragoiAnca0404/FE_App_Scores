import { Component, OnInit } from '@angular/core';
import { MeciuriService } from '../../services/meciuri.service';

@Component({
  selector: 'app-success-msg-add-echipa',
  templateUrl: './success-msg-add-echipa.page.html',
  styleUrls: ['./success-msg-add-echipa.page.scss'],
})
export class SuccessMsgAddEchipaPage implements OnInit {
  meciDenumire: string = '';

  constructor(private meciService: MeciuriService) { }

  ngOnInit() {
    this.meciDenumire = this.meciService.getMeciDenumire();
  }

}


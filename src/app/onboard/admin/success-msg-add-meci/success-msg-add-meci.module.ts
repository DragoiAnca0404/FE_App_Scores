import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessMsgAddMeciPageRoutingModule } from './success-msg-add-meci-routing.module';

import { SuccessMsgAddMeciPage } from './success-msg-add-meci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessMsgAddMeciPageRoutingModule
  ],
  declarations: [SuccessMsgAddMeciPage]
})
export class SuccessMsgAddMeciPageModule {}

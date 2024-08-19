import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessMsgAddEchipaPageRoutingModule } from './success-msg-add-echipa-routing.module';

import { SuccessMsgAddEchipaPage } from './success-msg-add-echipa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessMsgAddEchipaPageRoutingModule
  ],
  declarations: [SuccessMsgAddEchipaPage]
})
export class SuccessMsgAddEchipaPageModule {}

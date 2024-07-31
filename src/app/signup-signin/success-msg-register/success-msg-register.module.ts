import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessMsgRegisterPageRoutingModule } from './success-msg-register-routing.module';

import { SuccessMsgRegisterPage } from './success-msg-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessMsgRegisterPageRoutingModule
  ],
  declarations: [SuccessMsgRegisterPage]
})
export class SuccessMsgRegisterPageModule {}

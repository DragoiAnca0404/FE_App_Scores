import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login2FAPageRoutingModule } from './login-2-fa-routing.module';

import { Login2FAPage } from './login-2-fa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Login2FAPageRoutingModule
  ],
  declarations: [Login2FAPage]
})
export class Login2FAPageModule {}

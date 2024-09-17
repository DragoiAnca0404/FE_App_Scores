import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodAccesMeciPageRoutingModule } from './cod-acces-meci-routing.module';

import { CodAccesMeciPage } from './cod-acces-meci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodAccesMeciPageRoutingModule
  ],
  declarations: [CodAccesMeciPage]
})
export class CodAccesMeciPageModule {}

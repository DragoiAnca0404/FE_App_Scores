import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeciuriPageRoutingModule } from './meciuri-routing.module';

import { MeciuriPage } from './meciuri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeciuriPageRoutingModule
  ],
  declarations: [MeciuriPage]
})
export class MeciuriPageModule {}

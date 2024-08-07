import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizareMeciuriPageRoutingModule } from './vizualizare-meciuri-routing.module';

import { VizualizareMeciuriPage } from './vizualizare-meciuri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizareMeciuriPageRoutingModule
  ],
  declarations: [VizualizareMeciuriPage]
})
export class VizualizareMeciuriPageModule {}

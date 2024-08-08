import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizareScoruriPageRoutingModule } from './vizualizare-scoruri-routing.module';

import { VizualizareScoruriPage } from './vizualizare-scoruri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizareScoruriPageRoutingModule
  ],
  declarations: [VizualizareScoruriPage]
})
export class VizualizareScoruriPageModule {}

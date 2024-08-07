import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizareActivitatiPageRoutingModule } from './vizualizare-activitati-routing.module';

import { VizualizareActivitatiPage } from './vizualizare-activitati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizareActivitatiPageRoutingModule
  ],
  declarations: [VizualizareActivitatiPage]
})
export class VizualizareActivitatiPageModule {}

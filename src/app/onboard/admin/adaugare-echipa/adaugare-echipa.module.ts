import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdaugareEchipaPageRoutingModule } from './adaugare-echipa-routing.module';

import { AdaugareEchipaPage } from './adaugare-echipa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdaugareEchipaPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [AdaugareEchipaPage]
})
export class AdaugareEchipaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdaugareMeciNouPageRoutingModule } from './adaugare-meci-nou-routing.module';

import { AdaugareMeciNouPage } from './adaugare-meci-nou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdaugareMeciNouPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdaugareMeciNouPage]
})
export class AdaugareMeciNouPageModule {}

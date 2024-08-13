import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaugareMeciNouPage } from './adaugare-meci-nou.page';

const routes: Routes = [
  {
    path: '',
    component: AdaugareMeciNouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdaugareMeciNouPageRoutingModule {}

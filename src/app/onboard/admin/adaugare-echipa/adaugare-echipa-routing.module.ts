import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdaugareEchipaPage } from './adaugare-echipa.page';

const routes: Routes = [
  {
    path: '',
    component: AdaugareEchipaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdaugareEchipaPageRoutingModule {}

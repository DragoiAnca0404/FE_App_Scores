import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodAccesMeciPage } from './cod-acces-meci.page';

const routes: Routes = [
  {
    path: '',
    component: CodAccesMeciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodAccesMeciPageRoutingModule {}

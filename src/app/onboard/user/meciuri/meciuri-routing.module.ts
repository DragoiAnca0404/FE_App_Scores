import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeciuriPage } from './meciuri.page';

const routes: Routes = [
  {
    path: '',
    component: MeciuriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeciuriPageRoutingModule {}

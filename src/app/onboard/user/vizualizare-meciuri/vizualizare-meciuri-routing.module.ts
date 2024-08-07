import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VizualizareMeciuriPage } from './vizualizare-meciuri.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizareMeciuriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VizualizareMeciuriPageRoutingModule {}

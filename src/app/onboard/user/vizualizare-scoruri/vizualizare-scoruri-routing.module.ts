import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VizualizareScoruriPage } from './vizualizare-scoruri.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizareScoruriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VizualizareScoruriPageRoutingModule {}

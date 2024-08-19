import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessMsgAddEchipaPage } from './success-msg-add-echipa.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessMsgAddEchipaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessMsgAddEchipaPageRoutingModule {}

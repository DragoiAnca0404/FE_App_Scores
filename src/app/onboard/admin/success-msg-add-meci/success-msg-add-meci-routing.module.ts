import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessMsgAddMeciPage } from './success-msg-add-meci.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessMsgAddMeciPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessMsgAddMeciPageRoutingModule {}

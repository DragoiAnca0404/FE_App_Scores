import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessMsgRegisterPage } from './success-msg-register.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessMsgRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessMsgRegisterPageRoutingModule {}

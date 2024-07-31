import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login2FAPage } from './login-2-fa.page';

const routes: Routes = [
  {
    path: '',
    component: Login2FAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Login2FAPageRoutingModule {}

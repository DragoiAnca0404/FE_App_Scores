import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./signup-signin/register/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'success-msg-register',
    loadChildren: () => import('./signup-signin/success-msg-register/success-msg-register.module').then( m => m.SuccessMsgRegisterPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./signup-signin/login/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'login-2-fa',
    loadChildren: () => import('./signup-signin/login-2-fa/login-2-fa.module').then( m => m.Login2FAPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

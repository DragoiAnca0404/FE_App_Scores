import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './signup-signin/guards/auth.guard';
import { userIsLoginGuard } from './signup-signin/guards/user-is-login.guard';
import { authSuccessGuard } from './signup-signin/guards/auth-success.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./signup-signin/register/register/register.module').then(m => m.RegisterPageModule),
   // canActivate: [userIsLoginGuard]
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'success-msg-register',
    loadChildren: () => import('./signup-signin/success-msg-register/success-msg-register.module').then( m => m.SuccessMsgRegisterPageModule),
    //canActivate: [userIsLoginGuard]
  },
  {
    path: 'login-page',
    loadChildren: () => import('./signup-signin/login/login-page/login-page.module').then( m => m.LoginPagePageModule)
      },
  {
    path: 'login-2-fa',
    loadChildren: () => import('./signup-signin/login-2-fa/login-2-fa.module').then( m => m.Login2FAPageModule),
    //canActivate: [userIsLoginGuard]
  },
  {
    path: 'dummy',
    loadChildren: () => import('./onboard/admin/dummy/dummy.module').then( m => m.DummyPageModule),

  },
  {
    path: 'meciuri',
    loadChildren: () => import('./onboard/user/meciuri/meciuri.module').then( m => m.MeciuriPageModule)
  },
  {
    path: 'vizualizare-meciuri/:denumireMeci',
    loadChildren: () => import('./onboard/user/vizualizare-meciuri/vizualizare-meciuri.module').then( m => m.VizualizareMeciuriPageModule)
  },
  {
    path: 'vizualizare-activitati',
    loadChildren: () => import('./onboard/user/vizualizare-activitati/vizualizare-activitati.module').then( m => m.VizualizareActivitatiPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { userIsLoginGuard } from './signup-signin/guards/user-is-login.guard';
import { authGuard } from './signup-signin/guards/auth.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./signup-signin/register/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [userIsLoginGuard]
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'success-msg-register',
    loadChildren: () => import('./signup-signin/success-msg-register/success-msg-register.module').then(m => m.SuccessMsgRegisterPageModule),
    //canActivate: [userIsLoginGuard]
  },
  {
    path: 'login-page',
    loadChildren: () => import('./signup-signin/login/login-page/login-page.module').then(m => m.LoginPagePageModule),
    canActivate: [userIsLoginGuard]

  },
  {
    path: 'vizualizare-activitati',
    loadChildren: () => import('./onboard/user/vizualizare-activitati/vizualizare-activitati.module').then(m => m.VizualizareActivitatiPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'login-2-fa',
    loadChildren: () => import('./signup-signin/login-2-fa/login-2-fa.module').then(m => m.Login2FAPageModule),
    canActivate: [userIsLoginGuard]
  },
  {
    path: 'dummy',
    loadChildren: () => import('./onboard/admin/dummy/dummy.module').then(m => m.DummyPageModule),

  },
  {
    path: 'meciuri',
    loadChildren: () => import('./onboard/user/meciuri/meciuri.module').then(m => m.MeciuriPageModule)
  },
  {
    path: 'vizualizare-meciuri/:denumireSport',
    loadChildren: () => import('./onboard/user/vizualizare-meciuri/vizualizare-meciuri.module').then(m => m.VizualizareMeciuriPageModule)
  },
  {
    path: 'vizualizare-scoruri',
    loadChildren: () => import('./onboard/user/vizualizare-scoruri/vizualizare-scoruri.module').then(m => m.VizualizareScoruriPageModule)
  },
  {
    path: 'adaugare-meci-nou',
    loadChildren: () => import('./onboard/admin/adaugare-meci-nou/adaugare-meci-nou.module').then(m => m.AdaugareMeciNouPageModule)
  },
  {
    path: 'success-msg-add-meci',
    loadChildren: () => import('./onboard/admin/success-msg-add-meci/success-msg-add-meci.module').then( m => m.SuccessMsgAddMeciPageModule)
  },
  {
    path: 'adaugare-echipa',
    loadChildren: () => import('./onboard/admin/adaugare-echipa/adaugare-echipa.module').then( m => m.AdaugareEchipaPageModule)
  },
  {
    path: 'success-msg-add-echipa',
    loadChildren: () => import('./onboard/admin/success-msg-add-echipa/success-msg-add-echipa.module').then( m => m.SuccessMsgAddEchipaPageModule)
  },  {
    path: 'forgot-password',
    loadChildren: () => import('./signup-signin/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./signup-signin/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

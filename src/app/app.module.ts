import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared.module';
import { AuthInterceptor } from './signup-signin/services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
     IonicModule.forRoot(),
     AppRoutingModule,
     SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}

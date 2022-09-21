import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
      { provide: LOCALE_ID, useValue: 'pt' },
      { provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }

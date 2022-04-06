import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { PresentacionComponent } from './component/user/presentacion/presentacion.component';
import { Vista1Component } from './component/user/vista1/vista1.component';
import { Vista2Component } from './component/user/vista2/vista2.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    Vista1Component,
    Vista2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

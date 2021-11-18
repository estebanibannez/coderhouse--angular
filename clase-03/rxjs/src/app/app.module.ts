import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente3Component } from './components/componente3/componente3.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

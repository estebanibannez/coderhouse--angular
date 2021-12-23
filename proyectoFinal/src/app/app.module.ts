import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { CartComponent } from "./components/cart/cart.component";
import { ListComponent } from "./components/list/list.component";
import { InfoComponent } from "./components/info/info.component";
import { RegisterComponent } from "./views/register/register.component";
import { LoginComponent } from "./views/login/login.component";
import { HomeComponent } from "./views/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NotFound404Component } from "./views/not-found404/not-found404.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/app/material.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { BackofficeComponent } from './views/backoffice/backoffice.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ListComponent,
    InfoComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotFound404Component,
    BackofficeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from 'src/app/shared/contacto/contacto.component';
import { GameDayComponent } from 'src/app/shared/game-day/game-day.component';
import { HomeComponent } from 'src/app/shared/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'gameofday', component: GameDayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

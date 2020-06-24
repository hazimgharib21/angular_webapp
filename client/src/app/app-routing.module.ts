import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { SketchpadComponent } from './sketchpad/sketchpad.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home-page', component: HomeComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  { path: 'app-weather', component: WeatherComponent },
  { path: 'app-sketchpad', component: SketchpadComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

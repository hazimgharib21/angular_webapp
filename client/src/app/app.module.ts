import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { SketchpadComponent } from './sketchpad/sketchpad.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherstackService } from "./weatherstack.service";
import { OpenweathermapService } from "./openweathermap.service";
import { QuoteofthedayService } from "./quoteoftheday.service";
import { ProgrammingquoteService } from "./programmingquote.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    SketchpadComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherstackService,
    OpenweathermapService,
    QuoteofthedayService,
    ProgrammingquoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

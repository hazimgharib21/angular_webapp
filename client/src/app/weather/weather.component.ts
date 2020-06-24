import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherstackService } from "../weatherstack.service";
import { OpenweathermapService } from "../openweathermap.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public userWeatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherstackService: WeatherstackService,
    private openweathermapService: OpenweathermapService
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });

    if(window.navigator && window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.openweathermapService.getWeather(position.coords.longitude, position.coords.latitude).subscribe(data => {
            this.userWeatherData = data;
          })
        },
        error => {
          switch(error.code){
            case 1:
              console.log('[GEOLOCATION] Permission denied');
              break;
            case 2:
              console.log('[GEOLOCATION] Position unavailable');
              break;
            case 3:
              console.log('[GEOLOCATION] Timeout');
              break;
          }

        }
      )
    }
  }

  sendToWeatherstack(formValues){
    this.weatherstackService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
      });
  }

}

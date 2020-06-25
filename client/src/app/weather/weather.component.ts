import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherstackService } from "../weatherstack.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherstackService: WeatherstackService,
  ) { }

  ngOnInit(): void {

    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });

  }

  sendToWeatherstack(formValues){
    this.weatherstackService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
      });
  }

}

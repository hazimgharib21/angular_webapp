import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private http: HttpClient) { }

  getWeather(long, lat){
    let data = {
      longitude : long,
      latitude : lat
    }

    return this.http.post('http://localhost:8000/api/v1/openweathermap', data);
  }
}

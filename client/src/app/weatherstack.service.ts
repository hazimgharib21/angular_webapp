import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherstackService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    let data = {location: location};
    return this.http.post('http://localhost:8000/api/v1/weatherstack', data);
  }
}

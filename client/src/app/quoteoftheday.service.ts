import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteofthedayService {

  constructor(private http: HttpClient) { }

  getQuoteOfTheDay(){
    return this.http.get('http://localhost:8000/api/v1/quoteoftheday');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingquoteService {

  constructor(private http: HttpClient) { }

  getProgrammingQuote(){
    return this.http.get('http://localhost:8000/api/v1/programmingquote');
  }
}

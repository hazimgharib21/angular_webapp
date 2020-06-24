import { Component, OnInit } from '@angular/core';
import { QuoteofthedayService } from '../quoteoftheday.service';
import { ProgrammingquoteService } from '../programmingquote.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public quoteOfTheDay: any;
  public programmingQuote: any;

  constructor(
    private quoteofthedayService: QuoteofthedayService,
    private programmingquoteService: ProgrammingquoteService
  ) { }

  ngOnInit(): void {
    this.quoteofthedayService.getQuoteOfTheDay().subscribe(data => {
      this.quoteOfTheDay = data;
    })
    this.programmingquoteService.getProgrammingQuote().subscribe(data =>{
      this.programmingQuote = data;
    })
  }

}

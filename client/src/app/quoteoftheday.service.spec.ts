import { TestBed } from '@angular/core/testing';

import { QuoteofthedayService } from './quoteoftheday.service';

describe('QuoteofthedayService', () => {
  let service: QuoteofthedayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteofthedayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

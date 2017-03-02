import { TestBed, inject } from '@angular/core/testing';

import { JournalServiceService } from './journal-service.service';

describe('JournalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JournalServiceService]
    });
  });

  it('should ...', inject([JournalServiceService], (service: JournalServiceService) => {
    expect(service).toBeTruthy();
  }));
});

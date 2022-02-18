import { TestBed } from '@angular/core/testing';

import { MonthExamService } from './month-exam.service';

describe('MonthExamService', () => {
  let service: MonthExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

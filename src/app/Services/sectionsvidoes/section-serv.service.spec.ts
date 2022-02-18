import { TestBed } from '@angular/core/testing';

import { SectionServService } from './section-serv.service';

describe('SectionServService', () => {
  let service: SectionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HRServiceService } from './hr.service';

describe('HRServiceService', () => {
  let service: HRServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HRServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

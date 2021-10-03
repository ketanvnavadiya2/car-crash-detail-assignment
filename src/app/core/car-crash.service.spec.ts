import { TestBed } from '@angular/core/testing';

import { CarCrashService } from './car-crash.service';

describe('CarCrashService', () => {
  let service: CarCrashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCrashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

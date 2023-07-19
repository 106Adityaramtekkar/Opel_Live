import { TestBed } from '@angular/core/testing';

import { OpelServiceService } from './opel-service.service';

describe('OpelServiceService', () => {
  let service: OpelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LottoGenerateService } from './lotto-generate.service';

describe('LottoGenerateService', () => {
  let service: LottoGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

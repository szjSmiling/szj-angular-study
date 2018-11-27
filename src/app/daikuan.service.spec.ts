import { TestBed } from '@angular/core/testing';

import { DaikuanService } from './daikuan.service';

describe('DaikuanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaikuanService = TestBed.get(DaikuanService);
    expect(service).toBeTruthy();
  });
});

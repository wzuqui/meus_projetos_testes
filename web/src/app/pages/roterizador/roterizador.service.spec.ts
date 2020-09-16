import { TestBed } from '@angular/core/testing';

import { RoterizadorService } from './roterizador.service';

describe('RoterizadorService', () => {
  let service: RoterizadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoterizadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

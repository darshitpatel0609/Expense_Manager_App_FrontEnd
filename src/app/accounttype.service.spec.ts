import { TestBed } from '@angular/core/testing';

import { AccounttypeService } from './accounttype.service';

describe('AccounttypeService', () => {
  let service: AccounttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccounttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

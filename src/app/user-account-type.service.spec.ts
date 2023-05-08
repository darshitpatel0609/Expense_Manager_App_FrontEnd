import { TestBed } from '@angular/core/testing';

import { UserAccountTypeService } from './user-account-type.service';

describe('UserAccountTypeService', () => {
  let service: UserAccountTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccountTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserSubCategoryService } from './user-sub-category.service';

describe('UserSubCategoryService', () => {
  let service: UserSubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

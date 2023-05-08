import { TestBed } from '@angular/core/testing';

import { ManageSubcategoryService } from './manage-subcategory.service';

describe('ManageSubcategoryService', () => {
  let service: ManageSubcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageSubcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

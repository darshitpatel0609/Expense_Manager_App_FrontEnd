import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserSubCategoryComponent } from './list-user-sub-category.component';

describe('ListUserSubCategoryComponent', () => {
  let component: ListUserSubCategoryComponent;
  let fixture: ComponentFixture<ListUserSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

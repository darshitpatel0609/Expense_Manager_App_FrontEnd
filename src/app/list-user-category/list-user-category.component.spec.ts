import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserCategoryComponent } from './list-user-category.component';

describe('ListUserCategoryComponent', () => {
  let component: ListUserCategoryComponent;
  let fixture: ComponentFixture<ListUserCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

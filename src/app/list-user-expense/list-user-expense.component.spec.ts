import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserExpenseComponent } from './list-user-expense.component';

describe('ListUserExpenseComponent', () => {
  let component: ListUserExpenseComponent;
  let fixture: ComponentFixture<ListUserExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

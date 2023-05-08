import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserIncomeComponent } from './list-user-income.component';

describe('ListUserIncomeComponent', () => {
  let component: ListUserIncomeComponent;
  let fixture: ComponentFixture<ListUserIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

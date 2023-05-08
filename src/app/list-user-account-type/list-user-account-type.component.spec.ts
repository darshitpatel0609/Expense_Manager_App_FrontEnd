import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAccountTypeComponent } from './list-user-account-type.component';

describe('ListUserAccountTypeComponent', () => {
  let component: ListUserAccountTypeComponent;
  let fixture: ComponentFixture<ListUserAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserAccountTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

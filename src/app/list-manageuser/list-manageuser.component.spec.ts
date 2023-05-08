import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManageuserComponent } from './list-manageuser.component';

describe('ListManageuserComponent', () => {
  let component: ListManageuserComponent;
  let fixture: ComponentFixture<ListManageuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManageuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListManageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

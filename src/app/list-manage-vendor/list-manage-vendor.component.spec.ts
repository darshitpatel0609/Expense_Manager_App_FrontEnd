import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManageVendorComponent } from './list-manage-vendor.component';

describe('ListManageVendorComponent', () => {
  let component: ListManageVendorComponent;
  let fixture: ComponentFixture<ListManageVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManageVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListManageVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

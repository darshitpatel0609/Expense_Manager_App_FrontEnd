import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddVendorComponent } from './list-add-vendor.component';

describe('ListAddVendorComponent', () => {
  let component: ListAddVendorComponent;
  let fixture: ComponentFixture<ListAddVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAddVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

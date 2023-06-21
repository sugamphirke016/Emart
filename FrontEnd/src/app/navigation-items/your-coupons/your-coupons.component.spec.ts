import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCouponsComponent } from './your-coupons.component';

describe('YourCouponsComponent', () => {
  let component: YourCouponsComponent;
  let fixture: ComponentFixture<YourCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourCouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

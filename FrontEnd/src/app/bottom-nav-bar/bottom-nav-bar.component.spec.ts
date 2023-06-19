import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavBarComponent } from './bottom-nav-bar.component';

describe('BottomNavBarComponent', () => {
  let component: BottomNavBarComponent;
  let fixture: ComponentFixture<BottomNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

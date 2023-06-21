import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHelpComponent } from './to-help.component';

describe('ToHelpComponent', () => {
  let component: ToHelpComponent;
  let fixture: ComponentFixture<ToHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

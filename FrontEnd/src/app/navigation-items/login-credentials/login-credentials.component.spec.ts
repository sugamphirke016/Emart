import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCredentialsComponent } from './login-credentials.component';

describe('LoginCredentialsComponent', () => {
  let component: LoginCredentialsComponent;
  let fixture: ComponentFixture<LoginCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login2FAPage } from './login-2-fa.page';

describe('Login2FAPage', () => {
  let component: Login2FAPage;
  let fixture: ComponentFixture<Login2FAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2FAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

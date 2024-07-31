import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessMsgRegisterPage } from './success-msg-register.page';

describe('SuccessMsgRegisterPage', () => {
  let component: SuccessMsgRegisterPage;
  let fixture: ComponentFixture<SuccessMsgRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMsgRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

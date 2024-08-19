import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessMsgAddMeciPage } from './success-msg-add-meci.page';

describe('SuccessMsgAddMeciPage', () => {
  let component: SuccessMsgAddMeciPage;
  let fixture: ComponentFixture<SuccessMsgAddMeciPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMsgAddMeciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

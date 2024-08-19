import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessMsgAddEchipaPage } from './success-msg-add-echipa.page';

describe('SuccessMsgAddEchipaPage', () => {
  let component: SuccessMsgAddEchipaPage;
  let fixture: ComponentFixture<SuccessMsgAddEchipaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMsgAddEchipaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

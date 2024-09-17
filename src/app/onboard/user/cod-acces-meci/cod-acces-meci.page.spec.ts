import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodAccesMeciPage } from './cod-acces-meci.page';

describe('CodAccesMeciPage', () => {
  let component: CodAccesMeciPage;
  let fixture: ComponentFixture<CodAccesMeciPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodAccesMeciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

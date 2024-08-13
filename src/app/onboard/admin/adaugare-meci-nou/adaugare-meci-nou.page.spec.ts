import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdaugareMeciNouPage } from './adaugare-meci-nou.page';

describe('AdaugareMeciNouPage', () => {
  let component: AdaugareMeciNouPage;
  let fixture: ComponentFixture<AdaugareMeciNouPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugareMeciNouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

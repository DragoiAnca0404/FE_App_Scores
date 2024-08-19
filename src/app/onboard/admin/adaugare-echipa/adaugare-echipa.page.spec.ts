import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdaugareEchipaPage } from './adaugare-echipa.page';

describe('AdaugareEchipaPage', () => {
  let component: AdaugareEchipaPage;
  let fixture: ComponentFixture<AdaugareEchipaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugareEchipaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

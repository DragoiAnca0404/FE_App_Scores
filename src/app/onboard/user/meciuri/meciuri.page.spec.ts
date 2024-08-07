import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeciuriPage } from './meciuri.page';

describe('MeciuriPage', () => {
  let component: MeciuriPage;
  let fixture: ComponentFixture<MeciuriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeciuriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

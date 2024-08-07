import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VizualizareMeciuriPage } from './vizualizare-meciuri.page';

describe('VizualizareMeciuriPage', () => {
  let component: VizualizareMeciuriPage;
  let fixture: ComponentFixture<VizualizareMeciuriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizareMeciuriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

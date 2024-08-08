import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VizualizareScoruriPage } from './vizualizare-scoruri.page';

describe('VizualizareScoruriPage', () => {
  let component: VizualizareScoruriPage;
  let fixture: ComponentFixture<VizualizareScoruriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizareScoruriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

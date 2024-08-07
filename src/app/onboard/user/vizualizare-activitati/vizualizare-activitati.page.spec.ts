import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VizualizareActivitatiPage } from './vizualizare-activitati.page';

describe('VizualizareActivitatiPage', () => {
  let component: VizualizareActivitatiPage;
  let fixture: ComponentFixture<VizualizareActivitatiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizareActivitatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

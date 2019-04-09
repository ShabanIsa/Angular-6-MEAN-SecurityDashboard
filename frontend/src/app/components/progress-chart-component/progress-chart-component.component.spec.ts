import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressChartComponentComponent } from './progress-chart-component.component';

describe('ProgressChartComponentComponent', () => {
  let component: ProgressChartComponentComponent;
  let fixture: ComponentFixture<ProgressChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

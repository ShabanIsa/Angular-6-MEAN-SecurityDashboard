import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeChartComponentComponent } from './gauge-chart-component.component';

describe('GaugeChartComponentComponent', () => {
  let component: GaugeChartComponentComponent;
  let fixture: ComponentFixture<GaugeChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

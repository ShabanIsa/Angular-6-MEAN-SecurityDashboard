import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JQueryChartComponent } from './j-query-chart.component';

describe('JQueryChartComponent', () => {
  let component: JQueryChartComponent;
  let fixture: ComponentFixture<JQueryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JQueryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JQueryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

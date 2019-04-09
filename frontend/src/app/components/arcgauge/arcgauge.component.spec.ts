import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARCGaugeComponent } from './arcgauge.component';

describe('ARCGaugeComponent', () => {
  let component: ARCGaugeComponent;
  let fixture: ComponentFixture<ARCGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARCGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARCGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navdrawer.ComponentComponent } from './navdrawer.component.component';

describe('Navdrawer.ComponentComponent', () => {
  let component: Navdrawer.ComponentComponent;
  let fixture: ComponentFixture<Navdrawer.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navdrawer.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navdrawer.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

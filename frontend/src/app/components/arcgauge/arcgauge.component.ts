import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arcgauge',
  templateUrl: './arcgauge.component.html',
  styleUrls: ['./arcgauge.component.scss']
})
export class ARCGaugeComponent implements OnInit {
  public value = 30;
  
  constructor() { }

  ngOnInit() {
  }

}

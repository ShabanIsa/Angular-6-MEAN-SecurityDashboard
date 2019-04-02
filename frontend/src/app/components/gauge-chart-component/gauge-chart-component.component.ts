import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge-chart-component',
  templateUrl: './gauge-chart-component.component.html',
  styleUrls: ['./gauge-chart-component.component.scss']
})
export class GaugeChartComponentComponent implements OnInit {

  public canvasWidth = 300
  public needleValue = 65
  public centralLabel = ''
  public name = 'Gauge chart'
  public bottomLabel = '65'
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  }
  constructor() { }

  ngOnInit() {
  }

}

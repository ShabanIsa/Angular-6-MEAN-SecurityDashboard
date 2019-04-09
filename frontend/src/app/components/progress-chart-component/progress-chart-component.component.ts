import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-chart-component',
  templateUrl: './progress-chart-component.component.html',
  styleUrls: ['./progress-chart-component.component.scss']
})
export class ProgressChartComponentComponent implements OnInit {

  public value: number = 10;
  public colors: any[] = [{
    to: 25,
    color: '#0058e9'
}, {
    from: 25,
    to: 50,
    color: '#37b400'
}, {
    from: 50,
    to: 75,
    color: '#ffc000'
}, {
    from: 75,
    color: '#f31700'
}];
  constructor() { }

  ngOnInit() {
  }

}

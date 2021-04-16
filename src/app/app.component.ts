import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: any;
  title = 'angular-chart-js-practise';

  chart = [];

  constructor() { }
  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    const data = {
      datasets: [
        {
          data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]
        }
      ]
    };

    const config: ChartConfiguration = {
      type: 'line',
      data,
      options: {}
    };
    
    // this.chart = new Chart(
    //   this.canvas.nativeElement.getContext('2d') as any,
    //   config as any
    // ) as any;
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), config) as any;
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: any;
  title = 'angular-chart-js-practise';

  chart = [];

  config: ChartConfiguration = {};

  constructor() { }
  ngOnInit(): void {
    const data: ChartData = {
      // label for the each data within dataset, seems not working, use xAxes instead
      // labels: [new Date("2016-12-25"), new Date("2016-12-27")],  
      datasets: [
        {
          label: "a",  //category label for the dataset
          data: [{x: new Date("2016-12-25"), y:20}, {x: new Date("2016-12-26"), y:10}, {x: new Date("2016-12-27"), y:60}]
        }
      ]
    };

    this.config = {
      type: 'line',
      data,
      options: {
        scales: {
          // x: {
          //   type: "timeseries"
          // }
          xAxes: [{
            type: "time",
            time: {
              unit: 'day',
              round: 'day',
              displayFormats: {
                day: 'MMM D'
              }
            }
          }],
          // yAxes: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }]
        }
      }
    };
  }
  
  ngAfterViewInit() {
   

    // this.chart = new Chart(
    //   this.canvas.nativeElement.getContext('2d') as any,
    //   config as any
    // ) as any;
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), this.config) as any;
  }

}

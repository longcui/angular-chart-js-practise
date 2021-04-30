import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

  config: ChartConfiguration = {};

  constructor() { }
  ngOnInit(): void {

    this.config = {
      type: 'bar',
      data: {
        // label for the data within dataset, seems not working, use xAxes instead
        // labels: [new Date("2016-12-25"), new Date("2016-12-27")],  
        datasets: [
          {
            label: "a",  //category label for the dataset
            type: "bar",
            backgroundColor: "red",
            data: [
              { x: new Date("2016-12-25"), y: 20 },
              { x: new Date("2016-12-26"), y: 44 },
              { x: new Date("2017-02-27"), y: 50 },
              { x: new Date("2017-12-28"), y: 60 }]
          },
          {
            label: "ab",  //category label for the dataset
            type: "line",
            backgroundColor: "",
            data: [
              { x: new Date("2016-12-25"), y: 20 },
              { x: new Date("2016-12-26"), y: -60 },
              { x: new Date("2017-2-27"), y: 10 },
              { x: new Date("2017-12-28"), y: 170 }]
          }
        ]
      },
      options: {
        scales: {
          // x: {
          //   type: "timeseries"
          // }
          xAxes: [{
            type: "time",
            // time: {
            //   unit: 'month',
            //   round: 'day',
            //   displayFormats: {
            //     day: 'yyyy MMM D'
            //   }
            // },
            ticks: {
              autoSkip: false,
              callback: function(value, index, values) {
                return value;
              }
            },
          //   gridLines : {
          //     display : false,
          // }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: false
          }]
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

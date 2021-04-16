import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

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
    
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
    const config = {
      type: 'line',
      data,
      options: {}
    };
    // this.chart = new Chart(
    //   this.canvas.nativeElement.getContext('2d') as any,
    //   config as any
    // ) as any;
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {   type: 'pie',
    data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
            label: '# of Votes',
            data: [1,2,3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },}) as any;
  }

}

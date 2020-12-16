import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css']
})
export class MixedChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const mixedChart = new Chart('mixedChart', {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [{
              label: 'Bar Dataset',
              data: [10, 20, 30, 40],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              /*為讓左右不同刻度，設定id*/
              yAxisID: 'A',
              /*this dataset is drawn below*/
              order: 2
          }, {
              label: 'Line Dataset',
              data: [2, 3, 1, 5],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              type: 'line',
              fill: false ,
              borderWidth: 1 ,
              /*為讓左右不同刻度，設定id*/
              yAxisID: 'B',
              /*this dataset is drawn on top*/
              order: 1
          }]
      },
      options: {
        title: {
          text: 'Mixed Chart',
          display: true
        },
        scales: {
          yAxes: [{
            id: 'A',
            position: 'left',
            ticks: {
              beginAtZero: true
            },
            /*框線顯示，預設為ture*/
            gridLines: {
              display: false
            }
          }, {
            id: 'B',
            position: 'right',
            ticks: {
              beginAtZero: true
            }
          }],
          /*設定不要顯示x軸網格*/
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
  });
  }

}

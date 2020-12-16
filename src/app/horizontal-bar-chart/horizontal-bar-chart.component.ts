import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
  horizontalBarChart: any;
  data: Array<number> = [12, 19, 3, 5, 2];
  labels: Array<string> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
  label = '# of Votes';
  constructor() { }

  ngOnInit(): void {
    this.horizontalBarChart = new Chart('horizontalBarChart', {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Horizontal Bar Chart',
          display: true
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          /*設定不要顯示y軸網格*/
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        onClick: (event, item) => {
          const idx = this.horizontalBarChart.getElementAtEvent(event)[0]._index;
          console.log(this.labels[idx] + ' is clicked!' +
            '\n' + this.label + ' is ' + this.data[idx]);
       }
      }
    });
  }

}

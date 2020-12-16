/* chart.js 引入angular的方式
* cli
* npm install angular-chart.js --save
* ng g component <name>
*/

/* chart.js基本架構
* initialization of a basic chart.
* var myChart = new Chart(ctx, {
* type: 'bar/horizontalBar/line/pie...',
* data: data,
* options: options
*  });
*/

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-annotation';
@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {
  verticalBarChart: any;
  oldfirstData: Array<number> = [12, 19, 3, 5, 2];
  oldsecondData: Array<number> = [10, 9, 2, 11, 5];
  labels: Array<string> = ['1', '2', '3', '4', '5'];
  labelstring = 's';
  datasets: Array<string> = ['Red', 'Blue'];

  constructor() { }

  ngOnInit(): void {
    this.verticalBarChart = new Chart('verticalBarChart', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.oldfirstData,
          label: this.datasets[0],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          // fill: false
          borderWidth: 1,
          /*將兩dataset緊密貼合*/
          barPercentage: 1
        }, {
          data: this.oldsecondData,
          label: this.datasets[1],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          // fill: false
          borderWidth: 1,
          /*將兩dataset緊密貼合*/
          barPercentage: 1

        }]
      },
      options: {
        // events: ['click'],
        title: {
          text: 'Vertical Bar Chart',
          display: true,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
          /*設定不要顯示x軸網格*/
          xAxes: [{
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: '(' + this.labelstring + ')'
            }
          }]
        },
        /* tooltip提示樣式 */
        tooltips: {
          enabled: true,
          /* 通過回調修改tooltips的標題*/
          callbacks: {
            title(item): any {
              return item[0].xLabel + 's';
            }
          }
        },
        onClick: (event, item) => {
          const idx = this.verticalBarChart.getElementAtEvent(event)[0]._index;
          console.log(this.labels[idx] + this.labelstring + ' is clicked!' + '\n' +
            this.datasets[0] + ' is ' + this.oldfirstData[idx] + '\n' +
            this.datasets[1] + ' is ' + this.oldsecondData[idx]);
        }
      }
    });
  }
  /*
  *將每個資料做random亂數
  */
  randomizeData(): void {
    const newfirstData: number[] = new Array();
    for (let i = 0; i <= this.oldfirstData.length; i++) {
      newfirstData.push(Math.round(Math.random() * 20));
    }
    const newsecondData: number[] = new Array();
    for (let i = 0; i <= this.oldsecondData.length; i++) {
      newsecondData.push(Math.round(Math.random() * 12));
    }
    this.verticalBarChart.data.datasets[0].data = newfirstData;
    this.verticalBarChart.data.datasets[1].data = newsecondData;
    this.verticalBarChart.update();
  }
  /*
  *加上一筆random資料，原本的資料不變，並將label++
  */
  addData(): void {
    this.verticalBarChart.data.labels[this.oldfirstData.length] = this.oldfirstData.length + 1;
    this.verticalBarChart.data.datasets[0].data[this.oldfirstData.length] = Math.round(Math.random() * 20);
    this.verticalBarChart.data.datasets[1].data[this.oldsecondData.length] = Math.round(Math.random() * 12);
    this.verticalBarChart.update();
  }
  /*
  *刪除最新一筆資料，並將label--
  */
  removeData(): void {
    this.verticalBarChart.data.datasets[0].data.shift();
    this.verticalBarChart.data.datasets[1].data.shift();
    this.verticalBarChart.data.labels.shift();
    this.verticalBarChart.update();
  }
}

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

/*調整y軸寬度(zoom in & zoom out)
  1. npm install --save chartjs-plugin-zoom
  2. import 'chartjs-plugin-zoom';
  3. 加入plugins
*/
import 'chartjs-plugin-zoom';

/*於chart上畫水平線/垂直線/矩形
  1. npm install chartjs-plugin-annotation --save
  2. import 'chartjs-plugin-annotation';
  3. 加入plugins
*/
import 'chartjs-plugin-annotation';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  oldfirstData: Array<number> = [12, 19, 3, 5, 2, 20, 9, 32, 7, 5];
  oldsecondData: Array<number> = [10, 9, 2, 11, 5, 3, 17, 23, 36, 22];
  lineChart2: any;
  constructor() { }

  ngOnInit(): void {

    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030, 2040, 2050],
        datasets: [{
          data: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
          label: 'Red',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Basic Line Chart',
          display: true
        },
        scales: {
          yAxes: [{
            type: 'logarithmic',
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
        },
        /*設定y軸zoom in & zoom out*/
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'y',
              drag: true
            },
            zoom: {
              enabled: true,
              mode: 'y',
              drag: true
            }
          }
        }
      }
    });

    this.lineChart2 = new Chart('lineChart2', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          data: this.oldfirstData,
          label: 'Red',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          lineTension: 0
        }, {
          data: this.oldsecondData,
          label: 'Blue',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          /*設定為非曲線*/
          lineTension: 0
        }]
      },
      options: {
        title: {
          text: 'Basic Line Chart',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          /*設定不要顯示x軸網格*/
          xAxes: [{
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: '(s)'
            }
          }]
        },
        /*設定X軸zoom in & zoom out*/
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x'
            },
            zoom: {
              enabled: true,
              mode: 'x'
            }
          },
          /* tooltip提示樣式 */
          tooltips: {
            enabled: true,
            /* 鼠標移到對應點上會同時顯示兩dataset在x軸上的數據 */
            mode: 'index',
            /* 通過回調修改tooltips的標題*/
            callbacks: {
              title(item: any): any {
                return item[0].xLabel + 's';
              }
            }
          },
          /* 問題:顯示不出來 */
          annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [{
               id: 'hline3',
               type: 'line',
               mode: 'horizontal',
               scaleID: 'y-axis-0',
               value: 3,
               borderColor: 'red',
               borderWidth: 1,
               label: {
                  backgroundColor: 'red',
                  content: 'Min Value',
                  enabled: true
               }
            }, {
               id: 'hline2',
               type: 'line',
               mode: 'horizontal',
               scaleID: 'y-axis-0',
               value: 35,
               borderColor: 'red',
               borderWidth: 1,
               label: {
                  backgroundColor: 'red',
                  content: 'Max Value',
                  enabled: true
               }
            }]
         }
          // annotation: {
          //   // events: ['click'],
          //   annotations: [{
          //     drawTime: 'afterDraw',
          //     // id: 'hline',
          //     type: 'line',
          //     mode: 'horizontal',
          //     scaleID: 'y-axis-0',
          //     value: 35,
          //     borderColor: 'black',
          //     borderWidth: 5,
          //     label: {
          //       backgroundColor: 'red',
          //       content: 'Upper Level',
          //       enabled: true
          //     }
          //     // onClick(e: any): void{
          //     //   // The annotation is is bound to the `this` variable
          //     //   console.log('Annotation', e.type, this);
          //     // }
          //   }],
          // }
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
    this.lineChart2.data.datasets[0].data = newfirstData;
    this.lineChart2.data.datasets[1].data = newsecondData;
    this.lineChart2.update();
    console.log(newfirstData);
    console.log(newsecondData);
  }
  /*
  *加上一筆random資料，原本的資料不變，並將label++
  */
  addData(): void {
    this.lineChart2.data.labels[this.oldfirstData.length] = this.oldfirstData.length + 1;
    this.lineChart2.data.datasets[0].data[this.oldfirstData.length] = Math.round(Math.random() * 35);
    this.lineChart2.data.datasets[1].data[this.oldsecondData.length] = Math.round(Math.random() * 30);
    this.lineChart2.update();
  }
  /*
  *刪除最新一筆資料，並將label--
  */
  removeData(): void {
    this.lineChart2.data.datasets[0].data.pop();
    this.lineChart2.data.datasets[1].data.pop();
    this.lineChart2.data.labels.pop();
    this.lineChart2.update();
  }
}


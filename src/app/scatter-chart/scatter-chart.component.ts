import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-annotation';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const scatterChart = new Chart('scatterChart', {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: -7,
            y: 1
          }, {
            x: 2,
            y: 8
          }, {
            x: 5,
            y: 10
          }, {
            x: 2,
            y: 3
          }, {
            x: -3,
            y: 7
          }, {
            x: -6,
            y: -1
          }, {
            x: 0,
            y: 0
          }, {
            x: -2,
            y: 4
          }, {
            x: 0,
            y: 6
          }, {
            x: 4,
            y: 2
          },
          {
            x: 5,
            y: 1
          }, {
            x: -3,
            y: 3
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom'
          }]
        },
        /* 問題:顯示不出來 */
        plugins: {
          annotation: {
            type: 'box',
            display: true,
            drawTime: 'afterDraw',
            // ID of the X scale to bind onto
            xScaleID: 'x',
            // ID of the Y scale to bind onto
            yScaleID: 'y',

            // Left edge of the box. in units along the x axis
            xMin: 4,
            // Right edge of the box
            xMax: 5,
            // Top edge of the box in units along the y axis
            yMax: 2,
            // Bottom edge of the box
            yMin: 1,

            borderColor: 'red',
            borderWidth: 2,
            // backgroundColor: 'tomato',
          }
        },
        // tooltips: {
        //   mode: 'point'
        // }
      }
    });
  }

}

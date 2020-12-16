import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '1950',
            fill: true,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            data: [12, 19, 3, 5, 2],
            borderWidth: 1
          }, {
            label: '2050',
            fill: true,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            data: [18, 20, 1, 4 , 5 ],
            borderWidth: 3
         }]
      },
      options: {
        title: {
          text: 'Radar Chart',
          display: true
        },
      }
    });
  }

}

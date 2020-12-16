import { element, ElementHelper } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  pieChart: any;

  constructor() { }

  ngOnInit(): void {
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
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
          borderWidth: 1,
          hoverBorderWidth: 3
        }]
      },
      options: {
        title: {
          text: 'Pie Chart',
          display: true
        },
        // onClick: this.handleClick
        // 1.
        // onClick: (evt, item) => {
        //   this.pieChart.update();
        //   item[0]._model.outerRadius += 10;
        // }
      }
    });
  }
  // tslint:disable-next-line: no-shadowed-variable
  // handleClick(element: any): void{
  //   element[0]._model.outerRadius += 10;
  //   this.pieChart.update();
  // }

}

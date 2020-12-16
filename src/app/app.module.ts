import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    HorizontalBarChartComponent,
    VerticalBarChartComponent,
    RadarChartComponent,
    ScatterChartComponent,
    BubbleChartComponent,
    PolarAreaChartComponent,
    MixedChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

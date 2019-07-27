import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  // public name="yamini";
  constructor() { }

  ngOnInit() {
    this.chartOptions;

  }
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: 360,
      inverted: true,
      // inverted:false
    },
    title: {
      text: false
    },
    subtitle: {
      text: false
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'category',
      labels: {
        // rotation: -45,
        style: {
          // fontFamily: 'Verdana, sans-serif',
          font: '9pt Trebuchet MS, Verdana, sans-serif',
          color: '#333'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: false
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: 'Departments: <b>{point.y:.1f} millions</b>'
    },
    series: [
      {
        name: 'departments',
        data: [
          {
            name: 'cse',
            color: '#4d80bf',
            y: 24
          },
          {
            name: 'ece',
            color: '#85b151',
            y: 20
          },
          {
            name: 'eee',
            color: '#ab8ce4',
            y: 14
          },
          {
            name: 'mech',
            color: '#ffc107',
            y: 24
          }
        ],
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: '#fff',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top=
          style: {
            fontSize: '10px',
            fontFamily: 'Verdana, sans-serif',
            textShadow: false,
            textOutline: false
          }
        }
      }
    ]
  };
}

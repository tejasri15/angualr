import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartsService } from './charts.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import * as moment from 'moment'
@Component({
  selector: 'app-piecharts',
  templateUrl: './piecharts.component.html',
  styleUrls: ['./piecharts.component.css']
})
export class PiechartsComponent implements OnInit {
  idLength: any = [];
  Highcharts: any;
  leavesPieChart: any = [];
  colors = [];
  i:any;
   day:any;
  chartTypeName: any
  images: '';
  showvideo: boolean;
  video: any;
  chartdata: any=[];
  name: string;
  selectedDate: moment.Moment;
  weekStart: string;
 
  // date: Date;
  constructor(private httpService: HttpClient, public router: Router, public _apiService: ChartsService ) { }
public date=new Date();
dd=this.date.getDate();
mm=this.date.getMonth()+1;
yy=this.date.getFullYear();
  ngOnInit() {
    this.clickFunctionCheck();
   
  }

  monthName(){

  // console.log(this.yy,this.mm,this.dd,"month,year,date");
  // for(this.i=this.dd;this.i<=this.dd+6;this.i++){
  //   console.log(this.i);
  // }
  // this.day=[Math.floor(this.date.getDate() / 7)]
  // console.log(this.day)
this.selectedDate=moment(this.date);
console.log(moment(this.date).format('MMM'));
// this.date.StartOf('Week').format('DD/MM/YYYY');
// this.weekStart = this.selectedDate.clone().startOf('MM').format('MMM Do');
}








  clickFunctionCheck() {
    this._apiService.getcallsetup().subscribe(data => {
      this.chartdata = data.data;
      this.idLength = _.pluck(this.chartdata, 'id')
      this.chartTypeName = _.pluck(this.chartdata, 'name')
      console.log(this.idLength, this.chartTypeName, 'plucked data');
      console.log(this.idLength.length)
      this.pieChart(this.idLength, this.chartTypeName)
    });
  }  


  pieChart(val, name) {
    console.log(val, name);

    this.Highcharts = Highcharts;
    this.leavesPieChart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        margin: [20, 20, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        type: 'pie',
        height: 220
      },
      // title: {
      //   // verticalAlign: 'middle',
      //   floating: true,
      //   // align: 'center',
      //   // text: 'centerText',
      //   x: -100,
      //   style: {
      //     font: '14pt Trebuchet MS, Verdana, sans-serif',
      //     fontWeight: '500'
      //   }
      // },
      tooltip: { enabled: true },

      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            distance: -10,
            enabled: false,
            color: 'white',
            formatter() {
              return this.point.y;
            },
            style: {
              textOutline: false
            }
          },
          point: {
            events: {
              legendItemClick(e: any) {
                e.preventDefault();
              }
            }
          },
          showInLegend: true
        }
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: true,
        floating: true,
        verticalAlign: 'middle',
        align: 'right',
        layout: 'vertical',
        itemMarginBottom: 4,
        itemStyle: {
          font: '9pt Trebuchet MS, Verdana, sans-serif'
        }
      },

      series: [
        
        {
          type: 'pie',
          size: '90%',
          center: ['50%', '50%'],
          name: name[0],
          innerSize: 130,
          slicedOffset: 10,
          colorByPoint: true,
          data: val,
          point: {
            events: {
              click: function (event: any) {
                this.clickFunctionCheck(event.point);
              }.bind(this)
            }
          }
        }
      ]
    };
  }



}

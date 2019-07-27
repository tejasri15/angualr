import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PiechartsComponent } from './piecharts/piecharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JSONTableModule } from 'angular-json-table';
import { VideouploadComponent } from './videoupload/videoupload.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FormsModule} from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { JoivalidationsComponent } from './joivalidations/joivalidations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartModule } from 'angular-highcharts';
import { ConversionsComponent } from './conversions/conversions.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgDatepickerModule } from 'ng2-datepicker';
import {CanvasWhiteboardComponent, CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PiechartsComponent,
    // BarchartComponent,
    VideouploadComponent,
    SidenavComponent,
    CalculatorComponent,
    ReactiveformsComponent,
    TemplateformsComponent,
    JoivalidationsComponent,
    BarchartComponent,
    ConversionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    JSONTableModule,
    NgxBarcodeModule,
    NgxQRCodeModule,
    NgQrScannerModule,
    NgDatepickerModule,
    CanvasWhiteboardModule,
    NgCircleProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

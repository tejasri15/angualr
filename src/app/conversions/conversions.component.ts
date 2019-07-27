import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import * as XLSX from 'xlsx';
import * as _ from 'underscore';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit {

  data: { eid: string; ename: string; esal: number; }[];
  employeelist: any;
  todaydate: any;
  saveAsExcelFile: any;
  constructor(private httpService: HttpClient, ) { }

  ngOnInit() {
    this.data = [{
      eid: 'e101',
      ename: 'ravi',
      esal: 1000
    }, {
      eid: 'e102',
      ename: 'ram',
      esal: 2000
    }, {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000
    }];

    this.getContentJSON();
  }

  excelSheetDownload() {
    const array: any = [];
    _.each(this.data, (o: any) => {
      array.push({ EmployeeId: o.eid, EmployeeName: o.ename, Department: o.esal });
    });
    this.employeelist = array;
    this.exportXCEL();
  }
  public uploadData(event: any): void {
    // get data from file upload       
    let filesData = event.target.files;
    console.log(filesData[0]);
  }
  exportXCEL() {
    if (this.employeelist.length) {
      this.employeelist = JSON.parse(JSON.stringify(this.employeelist));
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const workBook = XLSX.utils.book_new(); // create a new blank book
      // preparing data
      const length = this.employeelist.length;
      const d = moment(this.todaydate).format('MMMM YYYY');
      const workSheet = XLSX.utils.json_to_sheet(this.employeelist);
      XLSX.utils.book_append_sheet(workBook, workSheet, 'employeeDetails_' + d); // add the worksheet to the book
      XLSX.writeFile(workBook, 'employeeDetails_' + d + '.xlsx'); // initiate a file download in browser
    }
  }


  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      // fileReader.readAsArrayBuffer(this.file);
    }
    fileReader.readAsArrayBuffer(this.file);
  }


  //   readfile() {
  //     // You can change the file path in the assets folder
  //     let url = "/assets/template.xlsx";
  //     let req = new XMLHttpRequest();
  //     req.open("GET", url, true);
  //     req.responseType = "arraybuffer";
  //     req.onload =  (e) => {
  //         let data = new Uint8Array(req.response);
  //         let workbook = XLSX.read(data, {type: "array"});
  //         const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
  //         // TO export the excel file
  //         this.saveAsExcelFile(excelBuffer, 'X');
  //     };
  //     req.send();
  // }


  captureScreen() {
    html2canvas(document.body).then(function (canvas) {
      // document.body.appendChild(canvas);
      var generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/download.jpg");
      window.location.href = generatedImage;
    });
  }



  public captureScreenToPdf() {
    var data = document.getElementById('convert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf')
    });
  }

  getContentJSON() {
    console.log(this.httpService.get("assets/general.json"));
    return this.httpService.get("assets/general.json");

  }




}

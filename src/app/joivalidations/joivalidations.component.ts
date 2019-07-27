import { Component, OnInit } from '@angular/core';
// import {IMyDpOptions} from 'mydatepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMyOptions, IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';
import { DatepickerOptions } from 'ng2-datepicker';
import { CanvasWhiteboardOptions, CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { NgCircleProgressModule } from 'ng-circle-progress';
@Component({
    selector: 'app-joivalidations',
    templateUrl: './joivalidations.component.html',
    viewProviders: [CanvasWhiteboardComponent],
    styleUrls: ['./joivalidations.component.css']
})
export class JoivalidationsComponent implements OnInit {
    ngOnInit(){}
    options: DatepickerOptions = {
       
        displayFormat: 'MMM D[,] YYYY',
   };
   date=moment(this.date).format('yyyy dd mm');
   canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: "drawButtonClass",
    drawButtonText: "Draw",
    clearButtonEnabled: true,
    clearButtonClass: "clearButtonClass",
    clearButtonText: "Clear",
    undoButtonText: "Undo",
    undoButtonEnabled: true,
    redoButtonText: "Redo",
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: "Save",
    lineWidth: 5,
    strokeColor: "rgb(0,0,0)",
    shouldDownloadDrawing: true
  };

}
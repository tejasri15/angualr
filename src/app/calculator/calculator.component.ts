import { Component, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { NgQrScannerModule, QrScannerComponent } from 'angular2-qrscanner';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  res: any;
  button1: any;
  button2: any;
  qrcode: string;
  value: any;
  showBarcode: boolean;
  showQr: boolean;
  constructor(public qrcodescanner: NgQrScannerModule) { }
  elementType = 'url';
  options: NgQrScannerModule;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;
  ngOnInit() {
  this.scanQRCode();
  }

  qrcodegenerator() {
    this.showQr = true;
    this.showBarcode = false;
    console.log(this.qrcode);
    this.value = this.qrcode;
  }
  barcodegenerator() {
    this.showQr = false;
    this.showBarcode = true;
    console.log(this.qrcode);
    this.value = this.qrcode;
  }
   
  captureScreen() {
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas);
      var generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/download.png");
      window.location.href = generatedImage;
    });
  }

  scanQRCode() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
    });
  }
}

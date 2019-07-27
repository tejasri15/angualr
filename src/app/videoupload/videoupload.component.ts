import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-videoupload',
  templateUrl: './videoupload.component.html',
  styleUrls: ['./videoupload.component.css']
})
export class VideouploadComponent implements OnInit {
  video: any;
  showvideo: boolean;
  data: any=[];
  spinner: boolean;

  constructor(private httpService: HttpClient, public router: Router, public _apiService: ApiService) { }

  ngOnInit() {
    this.getlist();
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.video = file;
     console.log('video uploaded successfully',this.video);
    }
  }
  viewVideo(){
    console.log('video uploaded successfully',this.video);
    this.showvideo=true;
  }
  
  getlist() {
    this.spinner=true;
    this._apiService.getcallsetup().subscribe(data => {
      console.log(data, 'data present in charts table');
      this.data = data.data;
    });
  }

}

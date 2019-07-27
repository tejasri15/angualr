import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {
model:any=[];
  constructor() { }

  ngOnInit() {
  }
onSubmit(){
  // alert(this.model);
  console.log('data',this.model);
  alert('data submitted sucessfully');
}
 cancel(){
   this.model.username='';
   this.model.password='';
 }
}

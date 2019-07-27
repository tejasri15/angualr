import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  married: any;
  unmarried: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      status:this.formBuilder.control('', [Validators.required]),
    });
   this.registerForm.get(status).valueChanges.subscribe(status=>{
    console.log('Username changed:' + status);
   })
  }








  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
     this.registerForm.get(status).valueChanges.subscribe(status=>{
    console.log('Username changed:' + status);
   })
  }
}

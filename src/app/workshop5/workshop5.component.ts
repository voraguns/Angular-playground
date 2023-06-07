import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workshop5',
  templateUrl: './workshop5.component.html',
  styleUrls: ['./workshop5.component.css']
})
export class Workshop5Component {
  formMember!:FormGroup

  ngOnInit():void{
    this.formMember = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      tel: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      age: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required)
    })
  }

  submit() {
    console.log(this.formMember);
  }
}

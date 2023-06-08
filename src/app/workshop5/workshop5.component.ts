import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface member {
  name: string,
  email: string,
  tel: string,
  age: string,
  gender: string
}

@Component({
  selector: 'app-workshop5',
  templateUrl: './workshop5.component.html',
  styleUrls: ['./workshop5.component.css']
})
export class Workshop5Component {
  formMember!:FormGroup

  listMember: member[] = [{
    name: "Voragun Supawong",
    email: "voragun2543@gmail.com",
    tel: "095-123-4567",
    age: "21",
    gender: "male"
  }];

  ngOnInit():void{
    this.formMember = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      tel: new FormControl("", [Validators.required, 
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      age: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required)
    })
  }

  submit() {
    const member = this.formMember.value;
    const isInvalid = this.formMember.invalid;

    if (isInvalid) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    this.listMember.push(member);
  }
}

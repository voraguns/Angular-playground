import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop2',
  templateUrl: './workshop2.component.html',
  styleUrls: ['./workshop2.component.css']
})
export class Workshop2Component {
  text: string = "";
  text2: string = "";
  text3: string = "";

  textSubmit = "";
  submit() {
    this.textSubmit = this.text2;
  }

  value = "";
  adddNewItem(value: string) {
    alert(value);
    this.value = value;
  }
}
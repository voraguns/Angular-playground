import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-show',
  templateUrl: './text-show.component.html',
  styleUrls: ['./text-show.component.css']
})
export class TextShowComponent {
  message: string = "";
  
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent {
  @Input() text = '???';
}

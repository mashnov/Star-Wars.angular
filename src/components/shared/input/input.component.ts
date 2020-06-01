import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrls: [
    './input.less',
  ],
})
export class InputComponent {
  @Input() value: string;
  @Input() placeholder: string;
  @Output() valueChanged = new EventEmitter<string>();

  onInput(event) {
    const value = event.target.value;
    this.valueChanged.emit(value);
  }
}

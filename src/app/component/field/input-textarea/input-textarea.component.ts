import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css'],
})
export class InputTextareaComponent
  extends FieldComponent<string>
  implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() autosizeMinRows: number;
  @Input() autosizeMaxRows: number;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
    this.autosizeMinRows = 4;
    this.autosizeMaxRows = 10;
  }

  ngOnInit(): void {}

  inputEvent(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

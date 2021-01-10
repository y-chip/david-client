import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css'],
})
export class InputNumberComponent extends FieldComponent implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
  }

  ngOnInit(): void {}

  inputEvent(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

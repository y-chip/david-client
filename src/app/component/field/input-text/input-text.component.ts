import { Component, OnInit, Input } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent extends FieldComponent implements OnInit {
  @Input() placeholder: string;

  constructor() {
    super();
    this.placeholder = 'placeholder';
  }

  ngOnInit(): void {}

  inputEvent(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

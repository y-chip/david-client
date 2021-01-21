import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-date',
  templateUrl: './field-date.component.html',
  styleUrls: ['./field-date.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldDateComponent }],
})
export class FieldDateComponent
  extends FieldComponent<Date>
  implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
  }

  ngOnInit(): void {}

  onChangeValue(value: Date): void {
    this.value = value;
    this.valueChange.emit(value);
    this.change.emit(value);
  }
}

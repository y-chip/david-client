import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{ provide: FieldComponent, useExisting: DatepickerComponent }],
})
export class DatepickerComponent
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

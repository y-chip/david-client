import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{ provide: FieldComponent, useExisting: SelectComponent }],
})
export class SelectComponent<T> extends FieldComponent<any> implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() options: T[];
  @Input() optionLabelProperty: keyof T | null;
  @Input() optionValueProperty: keyof T | null;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
    this.options = [{} as T];
    this.optionLabelProperty = null;
    this.optionValueProperty = null;
  }

  ngOnInit(): void {}

  onChangeValue(value: any): void {
    this.value = value;
    this.valueChange.emit(value);
    this.change.emit(value);
  }
}

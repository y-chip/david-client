import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{ provide: FieldComponent, useExisting: SelectComponent }],
})
export class SelectComponent extends FieldComponent<any> implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() options: { [index: string]: any }[];
  @Input() optionLabelProperty: string;
  @Input() optionValueProperty: string;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
    this.options = [{ key: 'key', value: 'value' }];
    this.optionLabelProperty = 'key';
    this.optionValueProperty = 'value';
  }

  ngOnInit(): void {}

  onChangeValue(value: any): void {
    this.value = value;
    this.valueChange.emit(value);
    this.change.emit(value);
  }
}

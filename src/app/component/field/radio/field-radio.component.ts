import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldRadioComponent }],
})
export class FieldRadioComponent extends FieldComponent<any> implements OnInit {
  @Input() required: boolean;
  @Input() options: { [index: string]: any }[];
  @Input() optionLabelProperty: string;
  @Input() optionValueProperty: string;

  constructor() {
    super();
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

  getSelectedLabel(): string {
    const selected = this.options.find(
      (o) => o[this.optionValueProperty] === this.value
    );
    return selected?.[this.optionLabelProperty];
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-number',
  templateUrl: './field-number.component.html',
  styleUrls: ['./field-number.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldNumberComponent }],
})
export class FieldNumberComponent
  extends FieldComponent<number>
  implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
  }

  ngOnInit(): void {}

  onChangeValue(value: string): void {
    const n = Number(value);
    this.value = n;
    this.valueChange.emit(n);
    this.change.emit(n);
  }

  getStringValue(): string | null {
    if (this.value == null) {
      return null;
    }
    return `${this.value}`;
  }
}

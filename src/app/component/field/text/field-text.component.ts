import { Component, OnInit, Input } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldTextComponent }],
})
export class FieldTextComponent
  extends FieldComponent<string>
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
    this.value = value;
    this.valueChange.emit(value);
    this.change.emit(value);
  }
}

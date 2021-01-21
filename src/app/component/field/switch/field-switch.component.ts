import { Component, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-switch',
  templateUrl: './field-switch.component.html',
  styleUrls: ['./field-switch.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldSwitchComponent }],
})
export class FieldSwitchComponent
  extends FieldComponent<boolean>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  onChangeValue(value: boolean): void {
    this.value = value;
    this.valueChange.emit(value);
    this.change.emit(value);
  }
}

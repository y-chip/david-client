import { Component, OnInit, Input } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [{ provide: FieldComponent, useExisting: InputTextComponent }],
})
export class InputTextComponent
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

  change(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldTextareaComponent }],
})
export class FieldTextareaComponent
  extends FieldComponent<string>
  implements OnInit {
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() autosizeMinRows: number;
  @Input() autosizeMaxRows: number;

  constructor() {
    super();
    this.placeholder = 'placeholder';
    this.required = false;
    this.autosizeMinRows = 4;
    this.autosizeMaxRows = 10;
  }

  ngOnInit(): void {}

  onChangeValue(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
    this.change.emit(value);
  }
}

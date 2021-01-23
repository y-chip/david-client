import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  template: ``,
})
export class FieldComponent<T> {
  @Input() width: string;
  @Input() label: string;
  @Input() name: string;
  @Input() value: T | null;
  @Output() valueChange = new EventEmitter<T>();
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  // tslint:disable-next-line:no-output-native
  @Output()
  change: EventEmitter<T> = new EventEmitter<T>();
  @ViewChild('input') input: NgModel | null;

  constructor() {
    this.width = '20rem';
    this.label = 'label';
    this.name = '';
    this.value = null;
    this.disabled = false;
    this.readonly = false;
    this.input = null;
  }
}

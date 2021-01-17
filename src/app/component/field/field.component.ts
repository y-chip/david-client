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
  @Input() value: T | null;
  @Output() valueChange = new EventEmitter<T>();
  @Input() disabled: boolean;
  @ViewChild('input') input: NgModel | null;

  constructor() {
    this.width = '20rem';
    this.label = 'label';
    this.value = null;
    this.disabled = false;
    this.input = null;
  }
}

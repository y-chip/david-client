import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgModel } from '@angular/forms';

type FieldWidth = '10rem' | '20rem' | '30rem' | '40rem';

@Component({
  template: ``,
})
export class FieldComponent<T> {
  @Input() width: FieldWidth;
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

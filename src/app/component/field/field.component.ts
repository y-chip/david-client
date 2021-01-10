import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: ``,
})
export class FieldComponent<T> {
  @Input() width: string;
  @Input() label: string;
  @Input() value: T | null;
  @Output() valueChange = new EventEmitter<T>();
  @Input() disabled: boolean;

  constructor() {
    this.width = '20rem';
    this.label = 'label';
    this.value = null;
    this.disabled = false;
  }
}

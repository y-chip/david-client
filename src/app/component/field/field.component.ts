import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: ``,
})
export class FieldComponent {
  @Input() width: string;
  @Input() label: string;
  @Input() value: string | null;
  @Output() valueChange = new EventEmitter<string>();
  @Input() disabled: boolean;

  constructor() {
    this.width = '20rem';
    this.label = 'label';
    this.value = '';
    this.disabled = false;
  }
}

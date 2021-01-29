import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  HostListener,
} from '@angular/core';
import { NgModel } from '@angular/forms';

type FieldWidth = '160px' | '320px' | '480px' | '640px';

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
  private scrollWidth: number;

  constructor() {
    this.width = '320px';
    this.label = 'label';
    this.name = '';
    this.value = null;
    this.disabled = false;
    this.readonly = false;
    this.input = null;
    this.scrollWidth = document.documentElement.scrollWidth;
  }

  getWidth(): string {
    const w = +this.width.replace('px', '');

    if (this.scrollWidth < w) {
      const pageWhiteSpace = 40;
      return `${this.scrollWidth - pageWhiteSpace}px`;
    }
    return this.width;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.scrollWidth = window.innerWidth;
  }
}

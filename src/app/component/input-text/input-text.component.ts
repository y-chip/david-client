import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() width: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string | null;
  @Output() valueChange = new EventEmitter<string>();

  constructor() {
    this.width = '20rem';
    this.label = 'label';
    this.placeholder = 'placeholder';
    this.value = '';
  }

  ngOnInit(): void {}

  inputEvent(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

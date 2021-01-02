import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() width!: string;

  @Input() label!: string;

  @Input() placeholder!: string;

  @Input() value!: string;

  constructor() {}

  ngOnInit(): void {
    if (this.width == null) {
      throw new Error('[width] is required');
    }
    if (this.label == null) {
      throw new Error('[label] is required');
    }
    if (this.placeholder == null) {
      throw new Error('[placeholder] is required');
    }
    if (this.value == null) {
      throw new Error('[value] is required');
    }
  }
}

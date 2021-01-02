import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() color!: string;

  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {
    if (this.color == null) {
      throw new Error('[color] is required');
    }
    if (this.label == null) {
      throw new Error('[label] is required');
    }
  }
}

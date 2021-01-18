import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() color: ThemePalette;
  @Input() label: string;

  constructor() {
    this.color = 'primary';
    this.label = 'button';
  }

  ngOnInit(): void {}
}

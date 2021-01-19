import { Component, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css'],
  providers: [{ provide: FieldComponent, useExisting: SlideToggleComponent }],
})
export class SlideToggleComponent
  extends FieldComponent<boolean>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}

  change(value: boolean): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

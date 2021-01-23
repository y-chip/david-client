import { Component, OnInit } from '@angular/core';
import { FieldComponent } from '../field.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-field-readonly',
  templateUrl: './field-readonly.component.html',
  styleUrls: ['./field-readonly.component.css'],
  providers: [{ provide: FieldComponent, useExisting: FieldReadonlyComponent }],
})
export class FieldReadonlyComponent
  extends FieldComponent<string>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}

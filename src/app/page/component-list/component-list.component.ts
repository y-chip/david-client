import { Component, Injector, OnInit } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent extends PageComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  disabledAll(): void {
    this.setDisabledAll(true);
  }

  readonlyAll(): void {
    this.setReadonlyAll(true);
  }

  resetDisabledReadonly(): void {
    this.setDisabledAll(false);
    this.setReadonlyAll(false);
  }
}

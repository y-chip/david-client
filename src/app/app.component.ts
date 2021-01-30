import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | null;
  constructor() {
    this.sidenav = null;
  }

  onClickMenu(): void {
    this.sidenav?.toggle();
  }
}

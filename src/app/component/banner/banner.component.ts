import { Component, OnInit } from '@angular/core';
import { MDCBanner } from '@material/banner';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const banner = new MDCBanner(document.querySelector('.mdc-banner') as Element);
    banner.open();
  }
}

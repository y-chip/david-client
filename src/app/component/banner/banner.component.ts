import { Component, OnInit } from '@angular/core';
import { MDCBanner } from '@material/banner';
import { BannerService } from '../../service/banner/banner.service';
import { CloseReason } from '@material/banner/constants';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  banner: MDCBanner | null;
  text: string;
  icon: string;

  constructor(private bannerService: BannerService) {
    this.banner = null;
    this.text = 'text';
    this.icon = 'info';
  }

  ngOnInit(): void {
    this.banner = new MDCBanner(
      document.querySelector('.mdc-banner') as Element
    );
    this.bannerService.open$.subscribe((value) =>
      this.open(value.text, value.icon)
    );
    this.bannerService.close$.subscribe(() => this.close());
  }

  open(text: string, icon: string): void {
    if (this.banner === null) {
      return;
    }
    this.text = text;
    this.icon = icon;
    this.banner.open();
  }

  close(): void {
    if (this.banner === null) {
      return;
    }
    this.banner.close(CloseReason.UNSPECIFIED);
  }
}

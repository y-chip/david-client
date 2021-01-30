import { Component, OnInit } from '@angular/core';
import { MDCBanner } from '@material/banner';
import { BannerService } from '../../service/banner/banner.service';
import { CloseReason } from '@material/banner/constants';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dvd-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  private banner: MDCBanner | null;
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
    this.bannerService.openSubject.subscribe((value) =>
      this.open(value.text, value.icon)
    );
    this.bannerService.closeSubject.subscribe(() => this.close());
  }

  private open(text: string, icon: string): void {
    this.text = text;
    this.icon = icon;
    this.banner?.open();
  }

  private close(): void {
    this.banner?.close(CloseReason.UNSPECIFIED);
  }

  private getHeight(): number | undefined {
    return this.banner?.root.offsetHeight;
  }
}

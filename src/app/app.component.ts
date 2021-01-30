import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BannerService } from './service/banner/banner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | null;
  constructor(private bannerService: BannerService) {
    this.sidenav = null;
  }

  onClickMenu(): void {
    this.bannerService.close();
    this.sidenav?.toggle();
  }
}

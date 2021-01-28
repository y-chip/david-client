import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppService } from './service/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  private queryList: MediaQueryList;
  private readonly onChangeQueryList: () => void;
  marginTopForBanner: number;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private appService: AppService
  ) {
    this.queryList = media.matchMedia('(max-width: 600px)');
    this.onChangeQueryList = () => changeDetectorRef.detectChanges();
    this.queryList.addEventListener('change', this.onChangeQueryList);
    this.marginTopForBanner = 0;
    this.appService.marginTopForBannerSubject.subscribe(
      (marginTopForBanner) => (this.marginTopForBanner = marginTopForBanner)
    );
  }

  ngOnDestroy(): void {
    this.queryList.removeEventListener('change', this.onChangeQueryList);
  }

  isSmallDisplay(): boolean {
    return this.queryList.matches;
  }
}

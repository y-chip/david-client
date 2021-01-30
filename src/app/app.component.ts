import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  private queryList: MediaQueryList;
  private readonly onChangeQueryList: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.queryList = media.matchMedia('(max-width: 600px)');
    this.onChangeQueryList = () => changeDetectorRef.detectChanges();
    this.queryList.addEventListener('change', this.onChangeQueryList);
  }

  ngOnDestroy(): void {
    this.queryList.removeEventListener('change', this.onChangeQueryList);
  }

  isSmallDisplay(): boolean {
    return this.queryList.matches;
  }
}

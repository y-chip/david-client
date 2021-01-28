import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  marginTopForBannerSubject: Subject<any> = new Subject();

  constructor() {}

  open(marginTopForBanner: number): void {
    this.marginTopForBannerSubject.next(marginTopForBanner);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  public open$: Subject<any> = new Subject();

  constructor() {}

  open(text: string, icon: string): void {
    this.open$.next({text, icon});
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  openSubject: Subject<any> = new Subject();
  closeSubject: Subject<any> = new Subject();

  constructor() {}

  open(text: string, icon: string): void {
    this.openSubject.next({text, icon});
  }

  close(): void {
    this.closeSubject.next();
  }
}

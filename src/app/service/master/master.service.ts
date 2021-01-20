import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Master, MasterControllerService } from '@david/david-api';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private service: MasterControllerService) {}

  get(): Observable<Array<Master>> {
    return this.service.get1();
  }
}

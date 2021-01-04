import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleFormControllerService, SampleForm } from '@david/david-api';

@Injectable({
  providedIn: 'root',
})
export class SampleFormService {
  constructor(private service: SampleFormControllerService) {}

  get(): Observable<SampleForm> {
    return this.service.get();
  }

  post(sampleForm: SampleForm): Observable<SampleForm> {
    return this.service.post(sampleForm);
  }
}

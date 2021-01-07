import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleFormControllerService, Sample } from '@david/david-api';

@Injectable({
  providedIn: 'root',
})
export class SampleFormService {
  constructor(private service: SampleFormControllerService) {}

  get(): Observable<Sample> {
    return this.service.get();
  }

  post(sample: Sample): Observable<Sample> {
    return this.service.save(sample);
  }
}

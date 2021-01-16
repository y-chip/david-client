import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  Sample,
  SampleFormControllerService,
  ValidationError,
} from '@david/david-api';
import { catchError } from 'rxjs/operators';
import { BannerService } from '../banner/banner.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SampleFormService {
  constructor(
    private service: SampleFormControllerService,
    private bannerService: BannerService
  ) {}

  get(): Observable<Sample> {
    return this.service.get();
  }

  post(sample: Sample): Observable<Sample> {
    return this.service.save(sample).pipe(catchError(this.handle()));
  }

  private handle(): (err: any) => Observable<never> {
    return (response: HttpErrorResponse): Observable<never> => {
      if (response.status === 400 && this.isValidationError(response.error)) {
        if (response.error.message != null) {
          this.bannerService.open(response.error.message, 'info');
        }
      }
      return throwError(response);
    };
  }

  private isValidationError(arg: any): arg is ValidationError {
    return (
      arg !== null &&
      typeof arg === 'object' &&
      typeof arg.field === 'string' &&
      typeof arg.message === 'string'
    );
  }
}

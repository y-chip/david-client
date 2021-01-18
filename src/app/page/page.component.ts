import { Component, Injector, QueryList, ViewChildren } from '@angular/core';
import { FieldComponent } from '../component/field/field.component';
import { BannerService } from '../service/banner/banner.service';
import { SnackbarService } from '../service/snackbar/snackbar.service';
import { ProgressSpinnerOverlayService } from '../service/progress-spinner-overlay/progress-spinner-overlay.service';
import { ValidationError } from '@david/david-api';

@Component({
  template: ``,
})
export class PageComponent {
  protected bannerService: BannerService;
  protected snackbarService: SnackbarService;
  protected progressSpinnerOverlayService: ProgressSpinnerOverlayService;
  @ViewChildren(FieldComponent) fields: QueryList<FieldComponent<any>> | null;

  constructor(injector: Injector) {
    this.bannerService = injector.get(BannerService);
    this.snackbarService = injector.get(SnackbarService);
    this.progressSpinnerOverlayService = injector.get(
      ProgressSpinnerOverlayService
    );
    this.fields = null;
  }

  protected isValidationError(arg: any): arg is ValidationError {
    return (
      arg !== null &&
      typeof arg === 'object' &&
      typeof arg.field === 'string' &&
      typeof arg.message === 'string'
    );
  }

  protected invalid(): boolean {
    if (this.fields == null) {
      return false;
    }

    return this.fields.some((f) => {
      return !!f.input?.invalid;
    });
  }

  protected setTouched(): void {
    this.fields?.forEach((f) => {
      f.input?.control.markAsTouched();
    });
  }

  protected showError(name: string, message: string): void {
    this.fields?.forEach((f) => {
      if (name === f.name) {
        f.input?.control.setErrors({ serverError: true });
      }
    });
  }
}

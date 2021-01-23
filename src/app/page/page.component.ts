import { Component, Injector, QueryList, ViewChildren } from '@angular/core';
import { FieldComponent } from '../component/field/field.component';
import { BannerService } from '../service/banner/banner.service';
import { SnackbarService } from '../service/snackbar/snackbar.service';
import { ProgressSpinnerOverlayService } from '../service/progress-spinner-overlay/progress-spinner-overlay.service';
import { ValidationError } from '@david/david-api';
import { forkJoin, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  template: ``,
})
export class PageComponent {
  protected bannerService: BannerService;
  protected snackbarService: SnackbarService;
  protected progressSpinnerOverlayService: ProgressSpinnerOverlayService;
  @ViewChildren(FieldComponent) fields: QueryList<FieldComponent<any>> | null;

  constructor(private injector: Injector) {
    this.bannerService = injector.get(BannerService);
    this.snackbarService = injector.get(SnackbarService);
    this.progressSpinnerOverlayService = injector.get(
      ProgressSpinnerOverlayService
    );
    this.fields = null;
  }

  protected http<T>(task: Observable<any>[]): void {
    this.bannerService.close();

    if (this.hasInvalidField()) {
      this.showInvalidField();
      return;
    }

    this.progressSpinnerOverlayService.show();
    forkJoin(task)
      .pipe(finalize(() => this.progressSpinnerOverlayService.close()))
      .subscribe(
        (response) => console.log(response),
        (error) => this.handleError(error)
      );
  }

  private hasInvalidField(): boolean {
    if (this.fields == null) {
      return false;
    }

    return this.fields.some((f) => {
      return !!f.input?.invalid;
    });
  }

  private showInvalidField(): void {
    this.markAsTouchedAll();
    this.bannerService.open('入力エラーがあります。', 'error');
  }

  protected markAsTouchedAll(): void {
    this.fields?.forEach((f) => {
      f.input?.control.markAsTouched();
    });
  }

  protected setDisabledAll(disabled: boolean): void {
    this.fields?.forEach((f) => {
      f.disabled = disabled;
    });
  }

  protected setReadonlyAll(readonly: boolean): void {
    this.fields?.forEach((f) => {
      f.readonly = readonly;
    });
  }

  private handleError(response: any): void {
    if (response.status === 400 && this.isValidationError(response.error)) {
      if (response.error.message != null) {
        this.bannerService.open(response.error.message, 'error');
        this.showError(response.error.field, response.error.message);
      }
    } else {
      this.bannerService.open('予期せぬエラーが発生しました。', 'warning');
      console.error(response);
    }
  }

  private showError(name: string, message: string): void {
    this.fields?.forEach((f) => {
      if (name === f.name) {
        f.input?.control.setErrors({ serverError: true });
      }
    });
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

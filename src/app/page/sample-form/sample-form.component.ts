import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SampleFormService } from '../../service/sample-form/sample-form.service';
import {Sample, ValidationError} from '@david/david-api';
import { SnackbarService } from '../../service/snackbar/snackbar.service';
import { ProgressSpinnerOverlayService } from '../../service/progress-spinner-overlay/progress-spinner-overlay.service';
import { FieldComponent } from '../../component/field/field.component';
import { BannerService } from '../../service/banner/banner.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css'],
})
export class SampleFormComponent implements OnInit {
  @ViewChildren(FieldComponent) fields: QueryList<FieldComponent<any>> | null;
  sample: Sample;

  constructor(
    private sampleFormService: SampleFormService,
    private bannerService: BannerService,
    private snackbarService: SnackbarService,
    private progressSpinnerOverlayService: ProgressSpinnerOverlayService
  ) {
    this.fields = null;
    this.sample = { id: null, text: null, longText: null, number: null };
  }

  ngOnInit(): void {
    this.progressSpinnerOverlayService.show();
    this.sampleFormService.get().subscribe((sample) => {
      this.sample = sample;
      this.progressSpinnerOverlayService.close();
      return;
    });
  }

  save(): void {
    if (this.invalid()) {
      this.setTouched();
      this.bannerService.open('入力エラーがあります。', 'error');
      return;
    }

    this.sampleFormService.post(this.sample).subscribe(
      (sample) => {
        this.sample = sample;
        this.progressSpinnerOverlayService.close();
        this.snackbarService.open('保存しました。');
        return;
      },
      (response) => {
        if (response.status === 400 && this.isValidationError(response.error)) {
          if (response.error.message != null) {
            this.bannerService.open(response.error.message, 'info');
            this.showError(response.error.field, response.error.message);
          }
        }
      }
    );
  }

  private isValidationError(arg: any): arg is ValidationError {
    return (
      arg !== null &&
      typeof arg === 'object' &&
      typeof arg.field === 'string' &&
      typeof arg.message === 'string'
    );
  }

  invalid(): boolean {
    if (this.fields == null) {
      return false;
    }

    return this.fields.some((f) => {
      return !!f.input?.invalid;
    });
  }

  setTouched(): void {
    this.fields?.forEach((f) => {
      f.input?.control.markAsTouched();
    });
  }

  showError(name: string, message: string): void {
    this.fields?.forEach((f) => {
      if (name === f.name) {
        f.input?.control.setErrors({serverError: true});
      }
    });
  }
}

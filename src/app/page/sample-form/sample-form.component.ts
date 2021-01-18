import { Component, Injector, OnInit } from '@angular/core';
import { SampleFormService } from '../../service/sample-form/sample-form.service';
import { Sample } from '@david/david-api';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css'],
})
export class SampleFormComponent extends PageComponent implements OnInit {
  sample: Sample;

  constructor(
    injector: Injector,
    private sampleFormService: SampleFormService
  ) {
    super(injector);
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
    this.progressSpinnerOverlayService.show();
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
}

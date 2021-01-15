import { Component, OnInit } from '@angular/core';
import { SampleFormService } from '../../service/sample-form/sample-form.service';
import { Sample } from '@david/david-api';
import { SnackbarService } from '../../service/snackbar/snackbar.service';
import { ProgressSpinnerOverlayService } from '../../service/progress-spinner-overlay/progress-spinner-overlay.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css'],
})
export class SampleFormComponent implements OnInit {
  sample: Sample;

  constructor(
    private sampleFormService: SampleFormService,
    private snackbarService: SnackbarService,
    private progressSpinnerOverlayService: ProgressSpinnerOverlayService
  ) {
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
    this.sampleFormService.post(this.sample).subscribe((sample) => {
      this.sample = sample;
      this.progressSpinnerOverlayService.close();
      this.snackbarService.open('保存しました。');
      return;
    });
  }
}

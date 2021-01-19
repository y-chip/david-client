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
    this.sample = {} as Sample;
  }

  ngOnInit(): void {
    this.http(this.sampleFormService.get(), (sample) => {
      this.sample = sample;
    });
  }

  save(): void {
    this.http(this.sampleFormService.post(this.sample), (sample) => {
      this.sample = sample;
      this.snackbarService.open('保存しました。');
    });
  }
}

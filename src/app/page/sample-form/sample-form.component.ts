import { Component, Injector, OnInit } from '@angular/core';
import { SampleFormService } from '../../service/sample-form/sample-form.service';
import { Master, Sample } from '@david/david-api';
import { PageComponent } from '../page.component';
import { MasterService } from '../../service/master/master.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css'],
})
export class SampleFormComponent extends PageComponent implements OnInit {
  sample: Sample;
  master: Array<Master>;

  constructor(
    injector: Injector,
    private sampleFormService: SampleFormService,
    private masterService: MasterService
  ) {
    super(injector);
    this.sample = {} as Sample;
    this.master = [] as Array<Master>;
  }

  ngOnInit(): void {
    this.http(this.sampleFormService.get(), (sample) => {
      this.sample = sample;
    });
    this.masterService.get().subscribe((master) => {
      this.master = master;
    });
  }

  save(): void {
    this.http(this.sampleFormService.post(this.sample), (sample) => {
      this.sample = sample;
      this.snackbarService.open('保存しました。');
    });
  }
}

import { Component, Injector, OnInit } from '@angular/core';
import { PageComponent } from '../page.component';
import {
  Master,
  MasterControllerService,
  Sample,
  SampleFormControllerService,
} from '@david/david-api';

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
    private sampleFormControllerService: SampleFormControllerService,
    private masterControllerService: MasterControllerService
  ) {
    super(injector);
    this.sample = {} as Sample;
    this.master = [] as Array<Master>;
  }

  ngOnInit(): void {
    this.http(this.sampleFormControllerService.get(), (sample) => {
      this.sample = sample;
    });
    this.masterControllerService.get1().subscribe((master) => {
      this.master = master;
    });
  }

  save(): void {
    this.http(this.sampleFormControllerService.save(this.sample), (sample) => {
      this.sample = sample;
      this.snackbarService.open('保存しました。');
    });
  }
}

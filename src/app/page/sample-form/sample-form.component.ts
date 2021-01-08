import { Component, OnInit } from '@angular/core';
import { SampleFormService } from '../../service/sample-form/sample-form.service';
import { Sample } from '@david/david-api';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css'],
})
export class SampleFormComponent implements OnInit {
  sample: Sample;

  constructor(private sampleFormService: SampleFormService) {
    this.sample = { id: null, string: null };
  }

  ngOnInit(): void {
    this.sampleFormService.get().subscribe((sample) => (this.sample = sample));
  }

  save(): void {
    this.sampleFormService
      .post(this.sample)
      .subscribe((sample) => (this.sample = sample));
  }
}

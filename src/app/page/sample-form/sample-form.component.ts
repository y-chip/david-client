import { Component, OnInit } from '@angular/core';
import { SampleFormService } from '../../service/sample-form/sample-form.service';
import { SampleForm } from '../../service/sample-form/sample-form';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css'],
})
export class SampleFormComponent implements OnInit {
  sampleForm: SampleForm;

  constructor(private sampleFormService: SampleFormService) {
    this.sampleForm = { string: '' };
  }

  ngOnInit(): void {
    this.sampleFormService
      .get()
      .subscribe((sampleForm) => (this.sampleForm = sampleForm));
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDateComponent } from './field-date.component';

describe('DatepickerComponent', () => {
  let component: FieldDateComponent;
  let fixture: ComponentFixture<FieldDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldDateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

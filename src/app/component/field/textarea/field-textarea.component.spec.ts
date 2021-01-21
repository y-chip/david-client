import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextareaComponent } from './field-textarea.component';

describe('InputTextareaComponent', () => {
  let component: FieldTextareaComponent;
  let fixture: ComponentFixture<FieldTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldTextareaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

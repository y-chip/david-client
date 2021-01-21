import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldNumberComponent } from './field-number.component';

describe('InputNumberComponent', () => {
  let component: FieldNumberComponent;
  let fixture: ComponentFixture<FieldNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

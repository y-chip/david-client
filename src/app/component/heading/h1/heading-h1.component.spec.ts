import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingH1Component } from './heading-h1.component';

describe('HeadingH1Component', () => {
  let component: HeadingH1Component;
  let fixture: ComponentFixture<HeadingH1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadingH1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

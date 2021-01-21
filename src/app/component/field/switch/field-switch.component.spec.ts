import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSwitchComponent } from './field-switch.component';

describe('SlideToggleComponent', () => {
  let component: FieldSwitchComponent;
  let fixture: ComponentFixture<FieldSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldSwitchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

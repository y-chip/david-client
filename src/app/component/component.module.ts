import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { FieldComponent } from './field/field.component';
import { FieldTextComponent } from './field/text/field-text.component';
import { FieldTextareaComponent } from './field/textarea/field-textarea.component';
import { FieldNumberComponent } from './field/number/field-number.component';
import { ButtonComponent } from './button/button.component';
import { BannerComponent } from './banner/banner.component';
import { FieldSwitchComponent } from './field/switch/field-switch.component';
import { FieldDateComponent } from './field/date/field-date.component';
import { FieldSelectComponent } from './field/select/field-select.component';
import { FieldRadioComponent } from './field/radio/field-radio.component';
import { FieldReadonlyComponent } from './field/readonly/field-readonly.component';
import { DividerComponent } from './divider/divider.component';
import { HeadingH1Component } from './heading/h1/heading-h1.component';

@NgModule({
  declarations: [
    RowComponent,
    ColumnComponent,
    BannerComponent,
    DividerComponent,
    HeadingH1Component,
    FieldComponent,
    FieldTextComponent,
    FieldTextareaComponent,
    FieldNumberComponent,
    FieldSwitchComponent,
    FieldDateComponent,
    FieldSelectComponent,
    FieldRadioComponent,
    FieldReadonlyComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    RowComponent,
    ColumnComponent,
    BannerComponent,
    DividerComponent,
    HeadingH1Component,
    FieldComponent,
    FieldTextComponent,
    FieldTextareaComponent,
    FieldNumberComponent,
    FieldSwitchComponent,
    FieldDateComponent,
    FieldSelectComponent,
    FieldRadioComponent,
    FieldReadonlyComponent,
    ButtonComponent,
  ],
})
export class ComponentModule {}

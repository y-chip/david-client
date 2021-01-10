import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { FieldComponent } from './field/field.component';
import { InputTextComponent } from './field/input-text/input-text.component';
import { InputTextareaComponent } from './field/input-textarea/input-textarea.component';
import { InputNumberComponent } from './field/input-number/input-number.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    RowComponent,
    ColumnComponent,
    FieldComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
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
    FieldComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    ButtonComponent,
  ],
})
export class ComponentModule {}

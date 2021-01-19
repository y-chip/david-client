import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { ComponentModule } from './component/component.module';

import { AppComponent } from './app.component';
import { ComponentListComponent } from './page/component-list/component-list.component';
import { SampleFormComponent } from './page/sample-form/sample-form.component';
import { PageComponent } from './page/page.component';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY/MM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY/MM',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ComponentListComponent,
    SampleFormComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    MatMomentDateModule,
    ComponentModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

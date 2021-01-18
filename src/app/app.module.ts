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
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

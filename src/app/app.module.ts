import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { ComponentModule } from './component/component.module';

import { AppComponent } from './app.component';
import { ComponentListComponent } from './page/component-list/component-list.component';

@NgModule({
  declarations: [AppComponent, ComponentListComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

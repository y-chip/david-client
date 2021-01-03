import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentListComponent } from './page/component-list/component-list.component';
import { SampleFormComponent } from './page/sample-form/sample-form.component';

const routes: Routes = [
  { path: 'component-list', component: ComponentListComponent },
  { path: 'sample-form', component: SampleFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

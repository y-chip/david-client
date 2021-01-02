import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentListComponent } from './page/component-list/component-list.component';

const routes: Routes = [
  { path: 'component-list', component: ComponentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

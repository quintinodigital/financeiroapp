import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaisPage } from './mais.page';

const routes: Routes = [
  {
    path: '',
    component: MaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaisPageRoutingModule {}

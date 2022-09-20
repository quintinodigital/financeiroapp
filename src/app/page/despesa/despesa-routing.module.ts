import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesaPage } from './despesa.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaPageRoutingModule {}

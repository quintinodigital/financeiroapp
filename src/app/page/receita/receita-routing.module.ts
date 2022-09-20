import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceitaPage } from './receita.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaPageRoutingModule {}

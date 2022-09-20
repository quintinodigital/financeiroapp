import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaCadastrarPage } from './receita-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaCadastrarPageRoutingModule {}

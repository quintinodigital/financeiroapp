import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaCadastrarPage } from './receita-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaCadastrarPage
  },
  // {
  //   path: "receita",
  //   loadChildren: () => import('../../receita/receita.module').then( m => m.ReceitaPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaCadastrarPageRoutingModule {}

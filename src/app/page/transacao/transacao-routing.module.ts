import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransacaoPage } from './transacao.page';

const routes: Routes = [
  {
    path: '',
    component: TransacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransacaoPageRoutingModule {}

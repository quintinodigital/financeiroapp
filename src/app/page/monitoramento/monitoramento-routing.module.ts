import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitoramentoPage } from './monitoramento.page';

const routes: Routes = [
  {
    path: '',
    component: MonitoramentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoramentoPageRoutingModule {}

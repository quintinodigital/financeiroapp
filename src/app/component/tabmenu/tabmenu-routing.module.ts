import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tabmenu/monitoramento",
    pathMatch: "full"
  },
  {
    path: '',
    component: TabmenuPage,
    children: [
      {
        path: 'monitoramento',
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/monitoramento/monitoramento.module').then( m => m.MonitoramentoPageModule)
          }
        ]        
      },
      {
        path: 'receita',
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/receita/receita.module').then( m => m.ReceitaPageModule)
          }
        ]        
      },
      {
        path: 'despesa',
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/despesa/despesa.module').then( m => m.DespesaPageModule)
          }
        ]        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule {}

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
      },
      {
        path: 'transacao',
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/transacao/transacao.module').then( m => m.TransacaoPageModule)
          }
        ]        
      },
      {
        path: 'mais',
        children: [
          {
            path: "",
            loadChildren: () => import('../../page/mais/mais.module').then( m => m.MaisPageModule)
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

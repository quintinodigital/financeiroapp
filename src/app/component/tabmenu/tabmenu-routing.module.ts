import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: "tabmenu",
    component: TabmenuPage,
    children: [
      {
        path: "monitoramento",
        loadChildren: () => import('../../page/monitoramento/monitoramento.module').then(m => m.MonitoramentoPageModule)
      },
      {
        path: "receita",
        loadChildren: () => import('../../page/receita/receita.module').then( m => m.ReceitaPageModule)
      },
      {
        path: "",
        redirectTo: "/tabmenu/monitoramento",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabmenu/monitoramento",
    pathMatch: "full"
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule { }

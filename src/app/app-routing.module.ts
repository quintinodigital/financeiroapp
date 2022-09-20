import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabmenu',
    pathMatch: 'full'
  },
  {
    path: 'tabmenu',
    loadChildren: () => import('./component/tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
  },
  // {
  //   path: 'despesa',
  //   loadChildren: () => import('./page/despesa/despesa.module').then( m => m.DespesaPageModule)
  // },
  // {
  //   path: 'receita',
  //   loadChildren: () => import('./page/receita/receita.module').then( m => m.ReceitaPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

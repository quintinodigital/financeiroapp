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
  {
    path: "receita-cadastrar",
    loadChildren: () => import('./page/receita/receita-cadastrar/receita-cadastrar.module').then( m => m.ReceitaCadastrarPageModule)
  }
  ,
  {
    path: "despesa-cadastrar",
    loadChildren: () => import('./page/receita/receita-cadastrar/receita-cadastrar.module').then( m => m.ReceitaCadastrarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaCadastrarPageRoutingModule } from './receita-cadastrar-routing.module';

import { ReceitaCadastrarPage } from './receita-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaCadastrarPageRoutingModule
  ],
  declarations: [ReceitaCadastrarPage]
})
export class ReceitaCadastrarPageModule {}

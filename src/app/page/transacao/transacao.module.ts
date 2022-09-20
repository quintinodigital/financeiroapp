import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransacaoPageRoutingModule } from './transacao-routing.module';

import { TransacaoPage } from './transacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransacaoPageRoutingModule
  ],
  declarations: [TransacaoPage]
})
export class TransacaoPageModule {}

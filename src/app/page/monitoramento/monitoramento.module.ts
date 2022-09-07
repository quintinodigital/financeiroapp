import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitoramentoPageRoutingModule } from './monitoramento-routing.module';

import { MonitoramentoPage } from './monitoramento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitoramentoPageRoutingModule
  ],
  declarations: [MonitoramentoPage]
})
export class MonitoramentoPageModule {}

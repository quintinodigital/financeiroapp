import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabmenuPageModule } from './../../component/tabmenu/tabmenu.module';
import { ReceitaPageRoutingModule } from './receita-routing.module';
import { ReceitaPage } from './receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaPageRoutingModule,
    TabmenuPageModule
  ],
  declarations: [ReceitaPage]
})
export class ReceitaPageModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmenuPageRoutingModule } from './tabmenu-routing.module';

import { TabmenuPage } from './tabmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmenuPageRoutingModule
  ],
  declarations: [TabmenuPage]
})
export class TabmenuPageModule {}

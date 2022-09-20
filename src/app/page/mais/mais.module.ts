import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaisPageRoutingModule } from './mais-routing.module';

import { MaisPage } from './mais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaisPageRoutingModule
  ],
  declarations: [MaisPage]
})
export class MaisPageModule {}

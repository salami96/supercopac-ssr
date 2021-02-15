import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { CartBtnComponent } from './cart-btn.component';

@NgModule({
  declarations: [ CartBtnComponent ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    CartBtnComponent
  ]
})
export class CartBtnModule { }

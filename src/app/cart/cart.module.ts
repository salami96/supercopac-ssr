import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { IconsModule } from '../icons/icons.module';
import { CartBtnComponent } from './cart-btn/cart-btn.component';

@NgModule({
  declarations: [ CartComponent, CartBtnComponent ],
  imports: [
    IconsModule,
    CommonModule
  ],
  exports: [
    CartBtnComponent
  ]
})
export class CartModule { }

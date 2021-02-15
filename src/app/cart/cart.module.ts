import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { IconsModule } from '../icons/icons.module';
import { CartBtnComponent } from '../cart-btn/cart-btn.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ CartComponent ],
  imports: [
    IconsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent }
    ])
  ]
})
export class CartModule { }

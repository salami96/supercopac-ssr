import { NgModule } from '@angular/core';
import { PromsComponent } from './proms.component';
import { RouterModule } from '@angular/router';
import { PromComponent } from './prom/prom.component';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { CartBtnModule } from '../cart-btn/cart-btn.module';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ PromsComponent, PromComponent, ModalComponent ],
  imports: [
    CartBtnModule,
    CommonModule,
    FormsModule,
    IconsModule,
    NgxMasonryModule,
    RouterModule.forChild([
      { path: '', component: PromsComponent, pathMatch: 'full'},
      { path: ':id', component: PromComponent, pathMatch: 'full'}
    ])
  ]
})
export class PromsModule { }

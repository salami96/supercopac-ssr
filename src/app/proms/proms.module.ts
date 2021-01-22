import { NgModule } from '@angular/core';
import { PromsComponent } from './proms.component';
import { RouterModule } from '@angular/router';
import { PromComponent } from './prom/prom.component';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [ PromsComponent, PromComponent ],
  imports: [
    CommonModule,
    CartModule,
    IconsModule,
    NgxMasonryModule,
    RouterModule.forChild([
      { path: '', component: PromsComponent, pathMatch: 'full'}
    ])
  ]
})
export class PromsModule { }

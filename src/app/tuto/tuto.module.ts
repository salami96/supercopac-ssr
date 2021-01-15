import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutoComponent } from './tuto.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [ TutoComponent ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule.forChild([
      { path: '', component: TutoComponent, pathMatch: 'full'}
    ]),
  ]
})
export class TutoModule { }

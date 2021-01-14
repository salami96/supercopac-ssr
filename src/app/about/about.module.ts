import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent, pathMatch: 'full'}
    ]),
  ]
})
export class AboutModule { }

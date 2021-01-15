import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ VideoComponent ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule.forChild([
      { path: '', component: VideoComponent, pathMatch: 'full'}
    ]),
  ]
})
export class VideoModule { }

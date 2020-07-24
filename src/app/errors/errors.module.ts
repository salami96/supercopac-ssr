import { NgModule } from '@angular/core';
import { E404Component } from './e404/e404.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [E404Component],
    imports: [
        RouterModule.forChild([
            { path: '', component: E404Component, children: [

            ] }
        ]
    )]
})
export class ErrorsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JarjestelmaRoutingModule } from './jarjestelma-routing.module';
import { JarjestelmaComponent } from './jarjestelma.component';


@NgModule({
  declarations: [
    JarjestelmaComponent
  ],
  imports: [
    CommonModule,
    JarjestelmaRoutingModule
  ]
})
export class JarjestelmaModule { }

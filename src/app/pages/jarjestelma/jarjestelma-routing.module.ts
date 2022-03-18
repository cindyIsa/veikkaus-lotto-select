import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JarjestelmaComponent } from './jarjestelma.component';

const routes: Routes = [
  {path:'',component:JarjestelmaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JarjestelmaRoutingModule { }

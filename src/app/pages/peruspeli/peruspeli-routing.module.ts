import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeruspeliComponent } from './peruspeli.component';

const routes: Routes = [
  {path:'', component:PeruspeliComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class peruspeliRoutingModule { }

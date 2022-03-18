import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:"peruspeli",pathMatch: 'full'},
  { path: 'peruspeli', loadChildren:()=> import('./pages/peruspeli/peruspeli.module').then(m=>m.PeruspeliModule)},
  { path: 'jarjestelma', loadChildren:()=> import('./pages/jarjestelma/jarjestelma.module').then(m=>m.JarjestelmaModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

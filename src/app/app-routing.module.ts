import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './component/user/presentacion/presentacion.component';
import { Vista1Component } from './component/user/vista1/vista1.component';
import { Vista2Component } from './component/user/vista2/vista2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: 'user/presentacion',
    component: PresentacionComponent
  },

  {
    path: 'user/vista1',
    component: Vista1Component
  },

  {
    path: 'user/vista2',
    component: Vista2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#region Componentes
import { HomeComponent } from './generals/components/home/home.component';
//#endregion Componentes

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { ListadoComponent } from './components/listado/listado.component';

import {CategoriaRoutingModule } from './categoria.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent,
     CrearComponent, EditarComponent, ListadoComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriaModule { }

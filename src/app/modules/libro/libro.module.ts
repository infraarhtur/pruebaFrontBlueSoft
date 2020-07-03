import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';

import {LibroRoutingModule } from './libro.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, ListadoComponent, CrearComponent, EditarComponent],
  imports: [
    CommonModule,
    LibroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LibroModule { }

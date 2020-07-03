import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CategoriaService } from '../../../../services/Categoria.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Categoria } from '../../../../models/Categoria';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public Categorias: Categoria[] = [];
  constructor(
    private CategoriaService: CategoriaService,
    private router: Router

  ) { }

  ngOnInit(): void {
   this. obtenerCategoriaes();
  }
crear(){
  this.router.navigate([`Categoria/crear`]);
}


Editar(id:Number){
  this.router.navigate([`Categoria/editar/${id}`]);
}


eliminar(id:number){

  this.CategoriaService.eliminarCategoria(id).subscribe((res:any) => {
    Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
  },(error:HttpErrorResponse)=>{

    if(error.status ===200){
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      this.obtenerCategoriaes();
    }
  });

}
  obtenerCategoriaes() {

    this.CategoriaService.obtenerCategorias().subscribe(
      (res: Categoria[]) => {

        this.Categorias = res;
        Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
        console.log('funciono', this.Categorias);

      }, (error: HttpErrorResponse) => {
        Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado', error);
      }

    );

  }

}

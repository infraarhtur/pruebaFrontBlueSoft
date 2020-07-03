import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LibroService } from '../../../../services/Libro.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Libro } from '../../../../models/Libro';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public Libros: Libro[] = [];
  constructor(
    private LibroService: LibroService,
    private router: Router

  ) { }

  ngOnInit(): void {
   this. obtenerLibros();
  }

  crear(){
    this.router.navigate([`Libro/crear`]);
  }

Editar(id:Number){
  this.router.navigate([`Libro/editar/${id}`]);
}


eliminar(id:number){

  this.LibroService.eliminarLibro(id).subscribe((res:any) => {
    Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
  },(error:HttpErrorResponse)=>{

    if(error.status ===200){
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      this.obtenerLibros();
    }
  });

}
  obtenerLibros() {

    this.LibroService.obtenerLibros().subscribe(
      (res: Libro[]) => {

        this.Libros = res;
        Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
        console.log('funciono', this.Libros);

      }, (error: HttpErrorResponse) => {
        Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado', error);
      }

    );

  }

}


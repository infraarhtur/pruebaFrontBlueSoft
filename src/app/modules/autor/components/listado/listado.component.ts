import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AutorService } from '../../../../services/autor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Autor } from '../../../../models/autor';
import { Router } from '@angular/router';

// import {Autor} from '../../../../models/Autor';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public autores: Autor[] = [];
  constructor(
    private autorService: AutorService,
    private router: Router

  ) { }

  ngOnInit(): void {
   this. obtenerAutores();
  }

  crear(){
    this.router.navigate([`Autor/crear`]);
  }

Editar(id:Number){
  this.router.navigate([`Autor/editar/${id}`]);
}



eliminar(id:number){

  this.autorService.eliminarAutor(id).subscribe((res:any) => {
    Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
  },(error:HttpErrorResponse)=>{

    if(error.status ===200){
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      this.obtenerAutores();
    }
  });

}

  obtenerAutores() {

    this.autorService.obtenerAutores().subscribe(
      (res: Autor[]) => {

        this.autores = res;
        Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
        console.log('funciono', this.autores);

      }, (error: HttpErrorResponse) => {
        Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado', error);
      }

    );

  }

}

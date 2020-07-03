import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Autor } from '../../../../models/autor';
import { AutorService } from '../../../../services/autor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  // @ViewChild('ngCrearAutor', { static: false }) public ngEditarUsuario: NgForm;
  public frmCrearAutor: FormGroup;
  public autor:Autor;
  constructor(
    public formBuilder: FormBuilder,
    private _autorService: AutorService,
    private router: Router

  ) {


    this.autor = new Autor();
  }

  ngOnInit(): void {
    this.validacionesFormulario();
  }


  CrearAutor(){

    this.autor.nombre = this.frmCrearAutor.value.Nombre;
    this.autor.apellido = this.frmCrearAutor.value.Descripcion;
    this.autor.fechaNacimiento = new Date(this.frmCrearAutor.value.Fecha) ;

    this._autorService.crearAutor(this.autor).subscribe((res:any)=>{
      Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
      console.log(res);

      this.router.navigate(['Autor']);
    },(error:HttpErrorResponse)=> {
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      console.log('error controlado ',error);
    });

  }


  validacionesFormulario() {

    this.frmCrearAutor = this.formBuilder.group({

      Nombre: this.formBuilder.control('',[Validators.required]),
      Apellido: this.formBuilder.control('',[Validators.required] ),

      Fecha: this.formBuilder.control('',[Validators.required])
    });
  }

  // [Validators.required]
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Categoria } from '../../../../models/Categoria';
import { CategoriaService } from '../../../../services/Categoria.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  // @ViewChild('ngCrearCategoria', { static: false }) public ngEditarUsuario: NgForm;
  public frmCrearCategoria: FormGroup;
  public Categoria:Categoria;
  constructor(
    public formBuilder: FormBuilder,
    private _CategoriaService: CategoriaService,
    private router: Router

  ) {


    this.Categoria = new Categoria();
  }

  ngOnInit(): void {
    this.validacionesFormulario();
  }


  CrearCategoria(){

    this.Categoria.nombre = this.frmCrearCategoria.value.Nombre;
    this.Categoria.descripcion = this.frmCrearCategoria.value.Descripcion;

    this._CategoriaService.crearCategoria(this.Categoria).subscribe((res:any)=>{

      console.log(res);
      Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
      this.router.navigate(['Categoria']);
    },(error:HttpErrorResponse)=> {
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      console.log('error controlado ',error);
    });

  }


  validacionesFormulario() {

    this.frmCrearCategoria = this.formBuilder.group({

      Nombre: this.formBuilder.control('',[Validators.required]),
      Descripcion: this.formBuilder.control('',[Validators.required] ),


    });
  }

  // [Validators.required]
}

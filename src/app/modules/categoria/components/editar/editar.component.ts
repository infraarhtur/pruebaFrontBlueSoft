import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Categoria } from '../../../../models/Categoria';
import { CategoriaService } from '../../../../services/Categoria.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router , ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public frmEditarCategoria: FormGroup;
  public categoria:Categoria;
  public id:number;
  constructor(
    public formBuilder: FormBuilder,
    private _CategoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {


    this.categoria = new Categoria();
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id')) ;
    this.obtenerCategoriaPorId();
  }

  ngOnInit(): void {
  this.validacionesFormulario();



  }


  EditarCategoria(){

    this.categoria.nombre = this.frmEditarCategoria.value.Nombre;
    this.categoria.descripcion = this.frmEditarCategoria.value.Descripcion;


    this._CategoriaService.editarCategoria (this.categoria).subscribe((res:any)=>{
      Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
      this.router.navigate(['Categoria']);
      console.log(res);
    },(error:HttpErrorResponse)=> {

      if(error.status ===200){
        Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
        this.router.navigate(['Categoria']);
      }
      console.log('error controlado ',error);
    });

  }


  validacionesFormulario() {
    debugger;
    this.frmEditarCategoria = this.formBuilder.group({

      Nombre: this.formBuilder.control(this.categoria.nombre,[Validators.required]),
      Descripcion: this.formBuilder.control(this.categoria.descripcion,[Validators.required] )
    });
  }



obtenerCategoriaPorId(){

 this._CategoriaService.obtenerCategoriaPorId(this.id).subscribe((res:Categoria)=>{
this. categoria= res;


},(error:HttpErrorResponse)=> {


  if(error.status ==200){
    this.router.navigate(['Categoria']);
  }
  Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
  console.log('error controlado ',error.message);
})
}



  // [Validators.required]
}

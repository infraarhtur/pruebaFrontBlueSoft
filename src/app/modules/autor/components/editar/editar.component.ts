import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Autor } from '../../../../models/autor';
import { AutorService } from '../../../../services/autor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router , ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public frmEditarAutor: FormGroup;
  public autor:Autor;
  public id:number;
  constructor(
    public formBuilder: FormBuilder,
    private _autorService: AutorService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {


    this.autor = new Autor();
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id')) ;
    this.obtenerAutorPorId();
  }

  ngOnInit(): void {
  this.validacionesFormulario();



  }


  EditarAutor(){

    this.autor.nombre = this.frmEditarAutor.value.Nombre;
    this.autor.apellido = this.frmEditarAutor.value.Apellido;
    this.autor.fechaNacimiento = new Date(this.frmEditarAutor.value.Fecha) ;

    this._autorService.editarAutor (this.autor).subscribe((res:any)=>{
      Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
      this.router.navigate(['Autor']);
      console.log(res);
    },(error:HttpErrorResponse)=> {

      if(error.status ===200){
        Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
        this.router.navigate(['Autor']);
      }

      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      console.log('error controlado ',error);
    });

  }


  validacionesFormulario() {
    debugger;
    this.frmEditarAutor = this.formBuilder.group({

      Nombre: this.formBuilder.control(this.autor.nombre,[Validators.required]),
      Apellido: this.formBuilder.control(this.autor.apellido,[Validators.required] ),

      Fecha: this.formBuilder.control(this.autor.fechaNacimiento,[Validators.required])
    });
  }



obtenerAutorPorId(){

 this._autorService.obtenerAutorPorId(this.id).subscribe((res:Autor)=>{
this. autor= res;


},(error:HttpErrorResponse)=> {



  console.log('error controlado ',error.message);
})
}



  // [Validators.required]
}

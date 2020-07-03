import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Libro } from '../../../../models/Libro';
import { LibroService } from '../../../../services/Libro.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router , ActivatedRoute} from '@angular/router';

import { AutorService } from '../../../../services/autor.service';
import { Autor } from '../../../../models/autor';
import { Categoria } from '../../../../models/Categoria';
import { CategoriaService } from '../../../../services/Categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  // @ViewChild('ngEditarLibro', { static: false }) public ngEditarUsuario: NgForm;
  public autores: Autor[] = [];
  public Categorias: Categoria[] = [];
  public frmEditarLibro: FormGroup;
  public Libro:Libro;
  public id:number;
  constructor(
    public formBuilder: FormBuilder,
    private _LibroService: LibroService,
    private router: Router,
    private autorService:AutorService,
    private CategoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute

  ) {


    this.Libro = new Libro();
    this.id=Number(this.activatedRoute.snapshot.paramMap.get('id')) ;
    this.obtenerLibroPorId();
  }

  ngOnInit(): void {
    this.obtenerAutores();
    this.obtenerCategoriaes();
    this.validacionesFormulario();
  }


  EditarLibro(){

    this.Libro.nombre = this.frmEditarLibro.value.Nombre;
    this.Libro.isbn = this.frmEditarLibro.value.Isbn;
    this.Libro.autorId = Number(this.frmEditarLibro.value.AutorId) ;
    this.Libro.categoriaId = Number(this.frmEditarLibro.value.CategoriaId);

    this._LibroService. editarLibro(this.Libro).subscribe((res:any)=>{

      console.log(res);
      Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
      this.router.navigate(['Libro']);
    },(error:HttpErrorResponse)=> {

      if(error.status ===200){
        Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
        this.router.navigate(['Libro']);
      }
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      console.log('error controlado ',error);
    });

  }


  validacionesFormulario() {

    this.frmEditarLibro = this.formBuilder.group({

      Nombre: this.formBuilder.control('',[Validators.required]),
      Isbn: this.formBuilder.control('',[Validators.required] ),

      AutorId: this.formBuilder.control('',[Validators.required]),
      CategoriaId: this.formBuilder.control('',[Validators.required])
    });
  }



  obtenerLibroPorId(){

    this._LibroService.obtenerLibroPorId(this.id).subscribe((res:Libro)=>{
   this. Libro= res;


   },(error:HttpErrorResponse)=> {


     console.log('error controlado ',error.message);
   })
   }




  obtenerAutores() {

    this.autorService.obtenerAutores().subscribe(
      (res: Autor[]) => {
debugger;
        this.autores = res;

        console.log('funciono', this.autores);

      }, (error: HttpErrorResponse) => {
        Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado', error);
      }

    );

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

  // [Validators.required]
}

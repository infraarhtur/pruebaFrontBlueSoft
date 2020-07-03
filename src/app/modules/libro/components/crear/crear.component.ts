import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Libro } from '../../../../models/Libro';
import { LibroService } from '../../../../services/Libro.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutorService } from '../../../../services/autor.service';
import { Autor } from '../../../../models/autor';
import { Categoria } from '../../../../models/Categoria';
import { CategoriaService } from '../../../../services/Categoria.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public autores: Autor[] = [];
  public Categorias: Categoria[] = [];
  // @ViewChild('ngCrearLibro', { static: false }) public ngEditarUsuario: NgForm;
  public frmCrearLibro: FormGroup;
  public Libro:Libro;
  constructor(
    public formBuilder: FormBuilder,
    private _LibroService: LibroService,
    private autorService:AutorService,
    private CategoriaService: CategoriaService,
    private router: Router

  ) {


    this.Libro = new Libro();
    this.obtenerAutores();
    this.obtenerCategoriaes();
  }

  ngOnInit(): void {


    this.validacionesFormulario();
  }


  CrearLibro(){

    this.Libro.nombre = this.frmCrearLibro.value.Nombre;
    this.Libro.isbn = this.frmCrearLibro.value.Isbn;
    this.Libro.autorId = Number(this.frmCrearLibro.value.AutorId) ;
    this.Libro.categoriaId = Number(this.frmCrearLibro.value.CategoriaId);

    this._LibroService.crearLibro(this.Libro).subscribe((res:any)=>{
      Swal.fire('la operación funciono ', 'buen trabajo!', 'success');
      console.log(res);

      this.router.navigate(['Libro']);
    },(error:HttpErrorResponse)=> {
      Swal.fire('Oops...', 'Contactese con el desarrollador!', 'error');
      console.log('error controlado ',error);
    });

  }


  validacionesFormulario() {

    this.frmCrearLibro = this.formBuilder.group({

      Nombre: this.formBuilder.control('',[Validators.required]),
      Isbn: this.formBuilder.control('',[Validators.required] ),

      AutorId: this.formBuilder.control('',[Validators.required]),
      CategoriaId: this.formBuilder.control('',[Validators.required])
    });
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

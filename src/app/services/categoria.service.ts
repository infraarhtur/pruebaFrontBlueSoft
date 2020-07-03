import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Categoria } from '../models/Categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public urlBase = '';

  constructor(private http: HttpClient) {

    this.urlBase = environment.urlBaseServicio;
   }


obtenerCategorias(){
  const url = `${this.urlBase}/api/Categorias`;
  return this.http.get(url);

}
obtenerCategoriaPorId(id:number){
  const url = `${this.urlBase}/api/Categorias/${id}`;
  return this.http.get(url);
}

crearCategoria(Categoria:Categoria){
  const url = `${this.urlBase}/api/Categorias`;
  const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
  return this.http.post(url, Categoria, { headers: httpOptions });
}

editarCategoria(Categoria:Categoria){
  const url = `${this.urlBase}/api/Categorias/${Categoria.id}`;
  const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
  return this.http.put(url, Categoria, { headers: httpOptions });
}

eliminarCategoria(id:number){
  const url = `${this.urlBase}/api/Categorias/${id}`;
  return this.http.delete(url);
}


}

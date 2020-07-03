import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Autor } from '../models/autor';
@Injectable({
  providedIn: 'root'
})
export class AutorService {
  public urlBase = '';

  constructor(private http: HttpClient) {

    this.urlBase = environment.urlBaseServicio;
   }


obtenerAutores(){
  const url = `${this.urlBase}/api/Autores`;
  return this.http.get(url);

}
obtenerAutorPorId(id:number){
  const url = `${this.urlBase}/api/Autores/${id}`;
  return this.http.get(url);
}

crearAutor(autor:Autor){
  const url = `${this.urlBase}/api/Autores`;
  const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
  return this.http.post(url, autor, { headers: httpOptions });
}

editarAutor(autor:Autor){
  const url = `${this.urlBase}/api/Autores/${autor.id}`;
  const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
  return this.http.put(url, autor, { headers: httpOptions });
}

eliminarAutor(id:number){
  const url = `${this.urlBase}/api/Autores/${id}`;
  return this.http.delete(url);
}


}

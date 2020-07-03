import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Libro } from '../models/Libro';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  public urlBase = '';

  constructor(private http: HttpClient) {

    this.urlBase = environment.urlBaseServicio;
   }


obtenerLibros(){
  const url = `${this.urlBase}/api/Libros`;
  return this.http.get(url);

}
obtenerLibroPorId(id:number){
  const url = `${this.urlBase}/api/Libros/${id}`;
  return this.http.get(url);
}

crearLibro(Libro:Libro){
  const url = `${this.urlBase}/api/Libros`;
  const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
  return this.http.post(url, Libro, { headers: httpOptions });
}

editarLibro(Libro:Libro){
  const url = `${this.urlBase}/api/Libros/${Libro.id}`;
  const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');
  return this.http.put(url, Libro, { headers: httpOptions });
}

eliminarLibro(id:number){
  const url = `${this.urlBase}/api/Libros/${id}`;
  return this.http.delete(url);
}


}

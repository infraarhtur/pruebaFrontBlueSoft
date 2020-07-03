export class Libro {
  public id: number;
  public nombre: string;
  public isbn: string;
  public autorId: number;
  public categoriaId: number;

  constructor() {
    this.id = 0;
    this.isbn="";
    this.nombre = "";
    this.autorId = 1;
    this.categoriaId = 1;

  }
}

export class Autor {
  public id: number;
  public nombre: string;
  public apellido: string;
  public fechaNacimiento: Date;

  constructor() {
    this.id = 0;
    this.apellido="";
    this.nombre = "";
    this.fechaNacimiento = new Date();

  }
}

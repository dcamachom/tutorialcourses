export class Serie {
  id: number;
  titulo: string;
  canal: string;
  temporadas: number;
  link: string;
  descripcion: string;
  imagen: string;

  public constructor (id: number, titulo:string, canal:string, temporadas: number, link:string, descripcion:string, imagen:string){
    this.id=id;
    this.canal=canal;
    this.descripcion=descripcion;
    this.imagen=imagen;
    this.temporadas=temporadas;
    this.link=link;
    this.titulo=titulo;
  }

}

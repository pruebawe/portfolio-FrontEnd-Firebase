export class persona {
    id?:number;
    nombre: string;
    apellido: string;
    titulo: string;
    descripcion: string;
    img: string;
    banner: string;

    constructor (nombre:string, apellido: string, titulo:string, descripcion:string, img:string, banner:string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img= img;
        this.banner= banner;

    }
}
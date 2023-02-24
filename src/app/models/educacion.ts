export class Educacion {
    id: number;
    nombreE: string;
    fechaInicio: string;
    fechaFin: string;
    descripcionE: string;
    imgE: string;

    constructor(nombreE: string, descripcionE: string, imgE: string, fechaInicio: string, fechaFin: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

}

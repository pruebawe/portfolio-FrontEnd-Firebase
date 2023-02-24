export class Experiencia {
    id: number;
    nombreE: string;
    fechaIniE: string;
    fechaFinE: string;
    descriptionE: string;
    imgE: string;

    constructor(nombreE: string, descriptionE:string, imgE: string, fechaIniE: string, fechaFinE: string) {
        this.nombreE = nombreE;
        this.descriptionE = descriptionE;
        this.imgE = imgE;
        this.fechaIniE = fechaIniE;
        this.fechaFinE = fechaFinE;
    }
}

export class Model {
    materia;
    nPeriodos;
    nI; nII; nIII; nIV;
    media;

    constructor(materia, nPeriodos, nI, nII, nIII, nIV) {
        this.materia = materia;
        this.nPeriodos = nPeriodos;
        this.nI=nI;
        this.nII=nII;
        this.nIII=nIII;
        this.nIV=nIV;
    }
}

import { Component, OnInit } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias;

  constructor() {
    this.materias = [];
  }

  ngOnInit() {
  }

  criarMateria(materia, nPeriodos, nI, nII, nIII, nIV){
    this.materias.push(new Model(materia, nPeriodos, nI, nII, nIII, nIV));
  }

  pegarMaterias(){
    return this.materias;
  }

  calcularMedia(){
    this.materias.media = (this.materias.nI + this.materias.nII + this.materias.nIII + this.materias.nIV) / 4;
  }

}

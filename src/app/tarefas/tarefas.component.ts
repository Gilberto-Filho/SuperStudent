import { Component, OnInit } from '@angular/core';
import { Model } from "./model";

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  itens;

  constructor() {
    this.itens = [];
  }

  ngOnInit() {
  }

  public sortByDataItem(): void{
    this.itens.sort((a: Model, b: Model) => {
      return +new Date(a.data)- +new Date(b.data);
    });
  }

  getItensNaoRealizados(){
    return this.itens.filter(function(item){ return !item.realizacao })
  }

  adicionarItem(acao, prioridade, data){
    if(acao != ""){
      this.itens.push(new Model(acao, false, prioridade, data));
    }
    this.sortByDataItem();
  }

  getItensRealizados(){
    return this.itens.filter(function(item){ return item.realizacao});
  }

}

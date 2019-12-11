import { Component, OnInit } from '@angular/core';
import { TarefasComponent } from "../tarefas/tarefas.component";
import { MetodosComponent } from "../metodos/metodos.component";
import { MateriasComponent } from "../materias/materias.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public acaoMenu = "";

  constructor() { }

  ngOnInit() {
  }

  mudarAcao(novaAcao?: string){
    this.acaoMenu = novaAcao;
  }

}

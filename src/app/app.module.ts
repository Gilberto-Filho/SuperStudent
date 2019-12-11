import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { MateriasComponent } from './materias/materias.component';
import { MetodosComponent } from './metodos/metodos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TarefasComponent,
    MateriasComponent,
    MetodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

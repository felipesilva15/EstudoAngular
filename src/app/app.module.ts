import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './views/test/test.component';
import { Test2Component } from './views/test2/test2.component';

// Importa as rotas para que tenha todas as funcionalidades disponíveis
import { RouterModule } from '@angular/router';

// Importa o recurso de comunicação HTTP
import { HttpClientModule } from "@angular/common/http";

// Importa o ngModel, que é o binding de duas vias
import { FormsModule } from "@angular/forms";
import { Ex01Component } from './views/ex01/ex01.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Ex01Component
  ],
  // Adicione também aos imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

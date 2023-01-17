import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Importa os componentes
import { TestComponent } from './views/test/test.component';
import { Test2Component } from './views/test2/test2.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { Ex05Component } from './views/ex05/ex05.component';
import { Ex06Component } from './views/ex06/ex06.component';

// Adiciona a rota de cada componente
const routes: Routes = [
  {path: 'test1', component: TestComponent},
  {path: 'test2', component: Test2Component},
  {path: 'ex01', component: Ex01Component},
  {path: 'ex02', component: Ex02Component},
  {path: 'ex03', component: Ex03Component},
  {path: 'ex04', component: Ex04Component},
  {path: 'ex05', component: Ex05Component},
  {path: 'ex06', component: Ex06Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa os componentes
import { TestComponent } from './views/test/test.component';
import { Test2Component } from './views/test2/test2.component';

// Adiciona a rota de cada componente
const routes: Routes = [
  {path: 'test1', component: TestComponent},
  {path: 'test2', component: Test2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

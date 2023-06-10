import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtsComponent } from './components/thoughts/delete-thoughts/delete-thoughts.component';
import { EditThoughtsComponent } from './components/thoughts/edit-thoughts/edit-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamentos',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtComponent
  },
  {
    path: 'listarPensamentos',
    component: ListThoughtsComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteThoughtsComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditThoughtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

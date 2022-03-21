import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfissionalComponent } from './page/profissional/profissional.component';
import { EstabelecimentoComponent } from './page/estabelecimento/estabelecimento.component';
import { ListarComponent } from './page/listar/listar.component';

const routes: Routes = [
  {path:'', component: ProfissionalComponent, pathMatch:'full'},
  {path:'profissional', component: ProfissionalComponent},
  {path:'estabelecimento', component: EstabelecimentoComponent},
  {path:'listar', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

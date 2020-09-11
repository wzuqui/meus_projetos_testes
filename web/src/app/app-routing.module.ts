import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomReuseStrategy } from './custom-reuse-strategy';

import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { GrafoComponent } from './pages/grafo/grafo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tela-inicial',
  },
  {
    path: 'tela-inicial',
    component: TelaInicialComponent,
  },
  {
    path: 'pessoas',
    component: PessoasComponent,
  },
  {
    path: 'grafo',
    component: GrafoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class AppRoutingModule {}

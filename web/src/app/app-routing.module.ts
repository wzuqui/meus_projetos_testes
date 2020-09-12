import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  DxDiagramModule,
  DxTileViewModule,
  DxScrollViewModule,
  DxSortableModule,
} from 'devextreme-angular';
import { GridsterModule } from 'angular-gridster2';
import { CustomReuseStrategy } from './custom-reuse-strategy';

import { GrafoComponent } from './pages/grafo/grafo.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
    component: GrafoComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [TelaInicialComponent, GrafoComponent, DashboardComponent],
  imports: [
    CommonModule,
    DxDiagramModule,
    DxScrollViewModule,
    DxSortableModule,
    DxTileViewModule,
    GridsterModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class AppRoutingModule {}

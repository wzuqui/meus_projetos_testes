import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  DxDiagramModule,
  DxTileViewModule,
  DxScrollViewModule,
  DxSortableModule,
  DxSelectBoxModule,
  DxFormModule,
  DxButtonModule,
  DxTextBoxModule,
  DxDataGridModule,
} from 'devextreme-angular';
import { GridsterModule } from 'angular-gridster2';
import { NgxdModule } from '@ngxd/core';

import { CustomReuseStrategy } from './custom-reuse-strategy';
import { GrafoComponent } from './pages/grafo/grafo.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoterizadorComponent } from './pages/roterizador/roterizador.component';
import { LeafletDecodeComponent } from './pages/leaflet-decode/leaflet-decode.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tela-inicial',
  },
  {
    path: 'tela-inicial',
    component: TelaInicialComponent,
    data: {
      titulo: 'Tela inicial'
    },
  },
  {
    path: 'pessoas',
    component: PessoasComponent,
    data: {
      titulo: 'Pessoas'
    },
  },
  {
    path: 'grafo',
    component: GrafoComponent,
    data: {
      titulo: 'Grafo'
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      titulo: 'Dashboard'
    },
  },
  {
    path: 'roterizador',
    component: RoterizadorComponent,
    data: {
      titulo: 'Roterizador'
    }
  },
  {
    path: 'leaflet-decode',
    component: LeafletDecodeComponent,
    data: {
      titulo: 'Leaflet decode'
    }
  }
];

@NgModule({
  declarations: [TelaInicialComponent, PessoasComponent, GrafoComponent, DashboardComponent, RoterizadorComponent, LeafletDecodeComponent],
  imports: [
    CommonModule,
    DxDiagramModule,
    DxDataGridModule,
    DxScrollViewModule,
    DxSortableModule,
    DxTileViewModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    GridsterModule,
    NgxdModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
})
export class AppRoutingModule {}

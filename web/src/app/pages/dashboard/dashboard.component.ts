import { Component } from '@angular/core';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GraficoComponent } from 'src/app/componentes/dashboard/grafico/grafico.component';

interface DashboardGridsterItem extends GridsterItem {
  component: unknown;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  gridsterConfig: GridsterConfig;
  dashboard: DashboardGridsterItem[];

  constructor() {
    this.gridsterConfig = {
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      gridType: 'fixed',
      fixedColWidth: 100,
      fixedRowHeight: 100,
      displayGrid: 'none'
    };
    this.dashboard = [
      {
        cols: 1,
        rows: 1,
        x: 0,
        y: 0,
        label: 'Tela inicial',
        component: GraficoComponent,
      },
      {
        cols: 1,
        rows: 1,
        x: 0,
        y: 1,
        label: 'Pessoas',
        component: GraficoComponent,
      },
      {
        cols: 1,
        rows: 1,
        x: 1,
        y: 0,
        label: 'Grafo',
        component: GraficoComponent,
      }
    ];
  }
}

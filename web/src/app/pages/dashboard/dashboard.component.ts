import { Component, } from '@angular/core';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
gridsterConfig: GridsterConfig;
  dashboard: GridsterItem[];


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
      {cols: 1, rows: 1, x: 0, y: 0, label: 'Tela inicial'},
      {cols: 1, rows: 1, x: 0, y: 1, label: 'Pessoas'},
      {cols: 1, rows: 1, x: 1, y: 0, label: 'Grafo'}
    ];
  }
}

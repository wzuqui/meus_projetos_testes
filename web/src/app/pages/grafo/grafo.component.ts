import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

import ArrayStore from 'devextreme/data/array_store';
import { GrafoService } from './grafo.service';


@Component({
  selector: 'app-grafo',
  templateUrl: './grafo.component.html',
  styleUrls: ['./grafo.component.scss'],
})
export class GrafoComponent implements AfterViewInit {
  macros: ArrayStore;
  links: ArrayStore;

  constructor(grafoService: GrafoService) {
    this.macros = new ArrayStore({
      key: 'this',
      data: grafoService.obterMacros(),
    });
    this.links = new ArrayStore({
      key: 'this',
      data: grafoService.obterLinks(),
    });
  }

  ngAfterViewInit(): void {
  }
}

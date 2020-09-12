import { Component } from '@angular/core';

import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss'],
})
export class TelaInicialComponent {
  paginas: Routes;

  constructor(private router: Router) {
    this.paginas = this.router.config;
  }
}

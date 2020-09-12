import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

import themes from 'devextreme/ui/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  paginas: Routes;

  constructor(private router: Router) {
    this.paginas = this.router.config;
  }

  public acaoTrocar({ value }: { value: boolean }): void {
    const tema = value ? 'generic.dark.compact' : 'generic.light.compact';
    window.localStorage.setItem('dx-theme', tema);

    themes.current(tema);
  }
}

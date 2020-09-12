import { Component } from '@angular/core';

import themes from 'devextreme/ui/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public acaoTrocar({ value }: { value: boolean }): void {
    const tema = value ? 'generic.dark.compact' : 'generic.light.compact';
    window.localStorage.setItem('dx-theme', tema);

    themes.current(tema);
  }
}

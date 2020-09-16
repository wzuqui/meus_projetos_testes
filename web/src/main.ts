import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import themes from 'devextreme/ui/themes';

import 'leaflet';
import 'leaflet.awesome-markers';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

themes.current(
  window.localStorage.getItem('dx-theme') ?? 'generic.dark.compact'
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

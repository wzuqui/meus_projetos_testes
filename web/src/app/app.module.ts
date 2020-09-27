import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxSwitchModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbaComponent } from './componentes/aba/aba.component';
import { GraficoComponent } from './componentes/dashboard/grafico/grafico.component';
import { BancoOfflineComponent } from './pages/banco-offline/banco-offline.component';

@NgModule({
  declarations: [
    AppComponent,
    AbaComponent,
    GraficoComponent,
    BancoOfflineComponent
  ],
  entryComponents: [
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxSwitchModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

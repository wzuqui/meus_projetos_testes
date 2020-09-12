import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxSwitchModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbaComponent } from './componentes/aba/aba.component';

@NgModule({
  declarations: [
    AppComponent,
    AbaComponent,
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

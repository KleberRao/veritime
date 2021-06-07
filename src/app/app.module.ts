import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './secoes/components/components.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage-angular';
import { DbService } from './servicos/db/db.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AppRoutingModule,BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot(),HttpClientModule,ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}

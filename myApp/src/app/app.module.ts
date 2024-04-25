import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RequestModalComponent } from './request-modal/request-modal.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module


@NgModule({
  declarations: [AppComponent,
    RequestModalComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, BrowserAnimationsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//which is used to import the Client side http request
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { PopupComponent } from './popup/popup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GridsComponent } from './grids/grids.component';
import { Api2Component } from './api2/api2.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    PopupComponent,
    GridsComponent,
    Api2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }

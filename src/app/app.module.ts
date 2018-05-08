import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//which is used to import the Client side http request
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { PopupComponent } from './popup/popup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//which is used to import the Client side http request
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }

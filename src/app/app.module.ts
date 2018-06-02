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
import { FeedbackComponent } from './feedback/feedback.component';
import { Fire1Component } from './fire1/fire1.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MaterialComponent } from './material/material.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    PopupComponent,
    GridsComponent,
    Api2Component,
    FeedbackComponent,
    Fire1Component,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule ,
    MatCheckboxModule,
    MatRadioModule
  
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }

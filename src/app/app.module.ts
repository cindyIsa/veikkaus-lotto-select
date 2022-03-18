import {   NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { lottoReducer } from './store/reducers/lotto';
import { plusReduce } from './store/reducers/plus';
import { CurrentLotto } from './store/reducers/currentLotto';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({
      'lotto':lottoReducer,
      'plus':plusReduce,
      'currentLotto':CurrentLotto,
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

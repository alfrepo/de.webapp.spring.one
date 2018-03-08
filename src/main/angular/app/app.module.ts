import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/user/users.component";
import {UsersDetailsComponent} from "./components/user/userdetails.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {AboutComponent} from "./components/about/about.component";
import {routerConfig} from './app.routes';
import {HttpModule} from "@angular/http";
import {TrainsComponent} from "./components/trains/trains.component";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent, UsersComponent, UsersDetailsComponent, PageNotFoundComponent, AboutComponent, TrainsComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routerConfig), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

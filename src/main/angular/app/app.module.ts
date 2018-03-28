import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./components/user/users.component";
import {UsersDetailsComponent} from "./components/user/userdetails.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {AboutComponent} from "./components/about/about.component";
import {routerConfig} from './app.routes';
import {TrainsComponent} from "./components/trains/trains.component";
import {HttpClientModule} from "@angular/common/http";
import {EnvironmentComponent} from "./components/environment/environment.component";




@NgModule({
  declarations: [
    AppComponent, UsersComponent, UsersDetailsComponent, PageNotFoundComponent, AboutComponent, TrainsComponent, EnvironmentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routerConfig), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

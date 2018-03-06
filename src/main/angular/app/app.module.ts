import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./user/users.component";
import {UsersDetailsComponent} from "./user/userdetails.component";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";
import {routerConfig} from './app.routes';
import {HttpModule} from "@angular/http";
import {AboutComponent} from "./about/about.component";



@NgModule({
  declarations: [
    AppComponent, UsersComponent, UsersDetailsComponent, PageNotFoundComponent, AboutComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

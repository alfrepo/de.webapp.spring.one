import { Routes } from '@angular/router';

import {UsersComponent} from "./components/user/users.component";
import {UsersDetailsComponent} from "./components/user/userdetails.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {AboutComponent} from "./components/about/about.component";
import {TrainsComponent} from "./components/trains/trains.component";
import {EnvironmentComponent} from "./components/environment/environment.component";

export const routerConfig: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'user/:id',      component: UsersDetailsComponent },
  { path: 'trains',      component: TrainsComponent },
  { path: '**', component: PageNotFoundComponent }
];

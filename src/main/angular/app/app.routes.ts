import { Routes } from '@angular/router';

import {UsersComponent} from './user/users.component';
import {UsersDetailsComponent} from "./user/userdetails.component";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";
import {AboutComponent} from "./about/about.component";

export const routerConfig: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id',      component: UsersDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

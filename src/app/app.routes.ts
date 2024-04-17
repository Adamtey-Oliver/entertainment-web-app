import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
// import {authGuard} from "./guards/auth.guard";
import {MoviesComponent} from "./pages/movies/movies.component";
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import {BookmarkComponent} from "./pages/bookmark/bookmark.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',

  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home',
    canActivate: [authGuard]
  },
  {
    path: 'bookmark',
    component: BookmarkComponent,
    title: 'bookmark'
  },
  {
    path: 'series',
    component: TvSeriesComponent,
    title: 'series'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    title: 'movies'
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full",
  },
];
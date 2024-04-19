import { Component, OnInit } from '@angular/core';
import {TrendingComponent} from "@app/components/trending/trending.component";
import {MovieContentsComponent} from "@app/components/movie-contents/movie-contents.component";
import {MoviesInterface} from "@app/interface/movies-interface";
import {MovieServiceService} from "@app/services/movie-service.service";
import {NgForOf} from "@angular/common";
import {SideBarComponent} from "@app/components/side-bar/side-bar.component";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TrendingComponent,
    MovieContentsComponent,
    NgForOf,
    SideBarComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movieList: MoviesInterface[] = [];
  TrendingList: MoviesInterface [] = [];
  constructor(private rs: MovieServiceService) {}
  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response;
      this.TrendingList = response.filter(
        (mov) => mov.isTrending,
      );
    });
  }
  userSearch: any;
  search() {
    if (this.userSearch == "") {
      this.ngOnInit();
    }else{
      this.movieList = this.movieList.filter(res =>{
        return res.title.toLocaleLowerCase().match(this.userSearch.toLocaleLowerCase())
      } )
    }
  }
}


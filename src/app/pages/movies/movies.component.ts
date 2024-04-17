import {Component, inject} from '@angular/core';
import { MovieContentsComponent } from '../../components/movie-contents/movie-contents.component';
import {NgForOf, NgIf} from "@angular/common";
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import {TrendingComponent} from "../../components/trending/trending.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MoviesComponent,
    NgForOf,
    SideBarComponent,
    TrendingComponent,
    MovieContentsComponent,
    NgIf,
    FormsModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movieList: MoviesInterface[] = [];
  constructor(private rs: MovieServiceService) {}
  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response.filter((mov) => mov.category.includes('Movie'));
    });
  }
  userSearch:any;
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

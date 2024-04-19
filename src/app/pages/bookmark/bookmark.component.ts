import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "@app/components/side-bar/side-bar.component";
import { MoviesInterface } from "@app/interface/movies-interface";
import { MovieServiceService } from "@app/services/movie-service.service";
import { MovieContentsComponent } from "@app/components/movie-contents/movie-contents.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [
    SideBarComponent,
    MovieContentsComponent,
    NgForOf,
    NgIf,
    FormsModule,
    AsyncPipe,
  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent implements OnInit {
  BookmarkedMovieList: MoviesInterface[] = [];
  BookmarkedSeriesList: MoviesInterface[] = [];
  BookmarkList: MoviesInterface[] = [];
  userSearch: any;

  constructor(private rs: MovieServiceService) {}

  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.BookmarkedMovieList = response.filter(
        (mov) => mov.category.includes('Movie') && mov.isBookmarked,
      );
      this.BookmarkedSeriesList = response.filter(
        (mov) => mov.category.includes('TV Series') && mov.isBookmarked,
      );

    });
  }

  search() {
    if (this.userSearch) {
      this.BookmarkedMovieList = this.BookmarkedMovieList.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.userSearch.toLocaleLowerCase());
      });
    }
    if (this.userSearch) {
      this.BookmarkedSeriesList = this.BookmarkedSeriesList.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.userSearch.toLocaleLowerCase());
      });
    } else {
    }
  }
}
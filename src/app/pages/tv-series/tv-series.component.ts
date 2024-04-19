import {Component, inject} from '@angular/core';
import {MovieContentsComponent} from "@app/components/movie-contents/movie-contents.component";
import {NgForOf, NgIf} from "@angular/common";
import {SideBarComponent} from "@app/components/side-bar/side-bar.component";
import {MoviesInterface} from "@app/interface/movies-interface";
import {MovieServiceService} from "@app/services/movie-service.service";
import {TrendingComponent} from "@app/components/trending/trending.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    MovieContentsComponent,
    NgForOf,
    SideBarComponent,
    NgIf,
    TrendingComponent,
    FormsModule,
  ],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css',
})
export class TvSeriesComponent {
  movieList: MoviesInterface[] = [];
  userSearch: String | undefined;

  constructor(private rs: MovieServiceService) {
  }

  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response.filter((mov) =>
        mov.category.includes('TV Series'),
      );
    });
  }

  search() {
    if (this.userSearch == "") {
      this.ngOnInit();
    } else {
      this.movieList = this.movieList.filter(res => {
        // @ts-ignore
        return res.title.toLocaleLowerCase().match(this.userSearch.toLocaleLowerCase())
      })
    }
  }
}

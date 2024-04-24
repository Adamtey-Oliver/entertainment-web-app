import {Component, Input} from '@angular/core';
import {MoviesInterface} from "@app/interface/movies-interface";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MovieServiceService} from "@app/services/movie-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-movie-contents',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './movie-contents.component.html',
  styleUrl: './movie-contents.component.css',
})
export class MovieContentsComponent {
  @Input() movieList!: MoviesInterface;

  constructor(private rs: MovieServiceService, private toaster: ToastrService) {}
  addToBookmark(movieList: MoviesInterface){
    if (movieList.isBookmarked) {
      movieList.isBookmarked = false
     this.rs.addToBookmark(movieList)
      this.toaster.success('removed from Bookmark!', ' successfully');
    } else {
      movieList.isBookmarked = true;
      this.rs.addToBookmark(movieList)
      this.toaster.success('Added to Bookmark!', ' successfully');
    }
    }
}
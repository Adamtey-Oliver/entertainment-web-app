import {Component, Input} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import {MoviesInterface} from "../../interface/movies-interface";
import {NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CarouselModule, CardModule, NgOptimizedImage],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent {
  @Input() movieList!: MoviesInterface;
}

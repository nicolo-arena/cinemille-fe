import { CommonModule } from "@angular/common";
import { Component, OnDestroy, type OnInit } from "@angular/core";
import { MovieService } from "../../core/service/movie.service";
import { Movie } from "../../core/model/Movie";
import { Subject, takeUntil } from "rxjs";
import { Person } from "../../core/model/Person";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, OnDestroy {
  destroyed = new Subject<void>();
  startDate: Date;
  endDate: Date;

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.startDate.getDate() + 7);
    this.getMovies();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  printPeople(people: Person[]): string {
    return people.map((p) => p.firstName + " " + p.lastName).join(", ");
  }

  changeStartDate(value: Date) {
    this.startDate = value;
    if (this.startDate > this.endDate) {
      this.movies = [];
    } else {
      this.getMovies();
    }
  }

  changeEndDate(value: Date) {
    this.endDate = value;
    if (this.startDate > this.endDate) {
      this.movies = [];
    } else {
      this.getMovies();
    }
  }

  getMovies() {
    this.movieService
      .getMovies(this.startDate, this.endDate)
      .pipe(takeUntil(this.destroyed))
      .subscribe((res) => (this.movies = res));
  }
}

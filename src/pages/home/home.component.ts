import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  type OnInit,
} from "@angular/core";
import { MovieService } from "../../core/service/movie.service";
import { Movie } from "../../core/model/Movie";
import { Observable, Subject } from "rxjs";
import { Person } from "../../core/model/Person";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  destroyed = new Subject<void>();
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
    this.movies$ = this.movieService.getMovies();
  }

  ngOnInit(): void {}

  printPeople(people: Person[]): string {
    return people.map((p) => p.firstName + " " + p.lastName).join(", ");
  }
}

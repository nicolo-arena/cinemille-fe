import { Injectable } from "@angular/core";
import { Movie } from "../model/Movie";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {}

  getMovies(startDate: Date, endDate: Date): Observable<Movie[]> {
    return this.httpClient.get(
      `http://localhost:8080/movies?start=${
        startDate ? this.datePipe.transform(startDate, "yyyy-MM-dd") : ""
      }&end=${endDate ? this.datePipe.transform(endDate, "yyyy-MM-dd") : ""}`
    ) as Observable<Movie[]>; // todo set url in environment
  }
}

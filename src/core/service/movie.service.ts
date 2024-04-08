import { Injectable } from "@angular/core";
import { Movie } from "../model/Movie";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get("http://localhost:8080/movies") as Observable<
      Movie[]
    >; // todo set url in environment
  }
}

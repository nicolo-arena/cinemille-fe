import { MovieSchedule } from "./MovieSchedule";
import { Person } from "./Person";

export interface Movie {
  title: string;
  duration: number;
  year: number;
  released: Date;
  country: string;
  studios: string[];
  genres: string[];
  movieSchedules: MovieSchedule[];
  actors: Person[];
  directors: Person[];
}

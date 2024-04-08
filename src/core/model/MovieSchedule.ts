import { MovieSession } from "./MovieSession";

export interface MovieSchedule {
  startDate: Date;
  endDate: Date;
  movieSessions: MovieSession[];
}

import type { IRating } from "./rating.model";
export interface IMovieDetails {
    Title: string;
    Poster: string;
    Plot: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: IRating[];
}  
import type { Movie } from "@/model/movie.model";
import type { IMovieDetails } from "@/model/movieDetails.model";
import HTTP from "@/api/client-http"
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: [] as  Movie[],
        oneMovie: {} as IMovieDetails,
    }),
    actions: {
        async getMovies(search:string = 'movies'){
            const resp =  await HTTP.get('',{
                params: {
                    s: search
                }
            })
            this.listMovies = resp.data.Search;
        },
        async getMovieById(id: string){
            const resp =  await HTTP.get('',{
                params: {
                    i: id
                }
            })
            this.oneMovie = resp.data;
        }
    }
})
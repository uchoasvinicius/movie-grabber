import { MovieModel } from '../models/movie-model'

export type SearchMovieParams = {
  query: string
}

export interface SearchMovie {
  search: (params: SearchMovieParams) => Promise<MovieModel>
}

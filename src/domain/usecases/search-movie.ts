import { MovieModel } from '../models/movie-model'

export interface SearchMovie {
  search: (query: string) => Promise<MovieModel>
}

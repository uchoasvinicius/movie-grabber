import { MovieModel } from '../models/movie-model'

type DiscoverModel = {
  page: number
  results: MovieModel[]
}

export interface DiscoverMovies {
  list: () => Promise<DiscoverModel>
}

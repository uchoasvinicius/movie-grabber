import { SearchMovieParams } from '@/domain/usecases/search-movie'
import faker from 'faker'

export const mockSearchMovie = (): SearchMovieParams => ({
  query: faker.lorem.word()
})
import React, { useState } from 'react'
import './home-styles.scss'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { MovieModel } from '@/interfaces/models/movie-model'
import Spinner from '@/presentation/components/spinner/spinner'
import { get } from '@/presentation/hooks/useLocalStorage'
import MovieCard from '@/presentation/components/movie-card/movie-card'

interface IMovies extends MovieModel {
  isLoading: boolean
  pages?: number
  page?: number
  total_results?: number
}

const Home: React.FC = () => {
  // const searchQuery = useRef<HTMLInputElement | null>(null)
  const [searchQuery, setQuery] = useState('')

  const [state, setState] = useState<IMovies | any>({
    isLoading: false,
    movies: []
  })
  const likes = get('FAVORITES')
  const [toggle, setToggle] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      // const query = (searchQuery.current?.value) ?? ''
      const query: string = searchQuery.trim()
      const axios = new AxiosHttpClient()
      if (state.isLoading || !query) {
        return
      }
      const { body }: any = await axios.get('search/movie', `query=${query}`)
      setState({ isLoading: false, movies: body.results })
    } catch (error) {
      setState((old: IMovies) => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <>
      <header className="container">
        <nav className={`d-inline-flex ${!toggle ? 'd-block' : 'd-none'}`}>
          <h1 >
            <img src="img/mv.svg"/>
          </h1>
          <ul className={`links ${!toggle ? 'd-inline-flex' : 'd-none'}`}>
            <li>
              <a>Favorites</a>
            </li>
            <li>
              <a>Watch Later</a>
            </li>
            <li className={!toggle ? 'd-md-none' : 'd-block'}>
              <a href="#" onClick={() => setToggle((old: boolean) => !old)}>
                <img src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"/>
              </a>
            </li>

          </ul>
          <form className="d-none d-md-inline-flex" onSubmit={async (e) => {
            handleSubmit(e)
            setState((old: IMovies) => ({ ...old, isLoading: true }))
          }}>
            <input type="text" className="d-none d-md-block" onChange={(e) => setQuery(e.target.value)}/>
            <button className="btn">Search</button>
          </form>
        </nav>
        <nav className={`w-md-100 mt-3 ${toggle ? 'd-block' : 'd-none'}`}>
          <form className="d-inline-flex w-100" onSubmit={async (e) => {
            handleSubmit(e)
            setState((old: IMovies) => ({ ...old, isLoading: true }))
          }}>
            <input className={'w-100'} type="text" onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => setToggle((old: boolean) => !old)} className="btn" type="submit">
              Search
            </button>
            <a href="#" className="cancel" onClick={() => setToggle((old: boolean) => !old)} type="button">
              Cancel
            </a>
          </form>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          {state?.movies?.map((movie: MovieModel) => (
            <MovieCard key={movie.id} active={likes.includes(movie.id.toString())} movie={movie}/>
          ))}
        </div>
      </div>
      {state.isLoading && <Spinner/>}
    </>
  )
}

export default Home

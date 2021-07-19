import React, { useState } from 'react'
import './search-styles.scss'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { MovieModel } from '@/interfaces/models/movie-model'
import Spinner from '@/presentation/components/spinner/spinner'

interface IMovies extends MovieModel {
  isLoading: boolean
  pages?: number
  page?: number
  total_results?: number
}

const Search: React.FC = () => {
  // const searchQuery = useRef<HTMLInputElement | null>(null)
  const [searchQuery, setQuery] = useState('')
  const extImg = 'https://image.tmdb.org/t/p/w400/'
  const noImg = 'https://advancepetproduct.com/wp-content/uploads/2019/04/no-image.png'
  const [state, setState] = useState<IMovies | any>({
    isLoading: false,
    movies: []
  })
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
      const { body }: any = await axios.get('/search/movie', `query=${query}`)
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
            <img alt="Movie Grabber" src="img/mv.svg"/>
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
                <img alt="Search" src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"/>
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
          {state?.movies.map((movie: MovieModel) => (
            <div key={movie.id} className="col-6 col-sm-4 col-lg-3">
              <a title={movie.original_title} href={`/movie/${movie.id}`}>
                <div className="card">
                  <div className="square">
                    <div className="square-blur"
                      style={{ backgroundImage: `url('${((movie.poster_path !== null) ? extImg + movie.poster_path : noImg)}')` }}>
                    </div>

                    <img alt="no-image"
                      src={(movie.poster_path !== null) ? extImg + movie.poster_path : noImg}
                      className="w-100"/>

                  </div>

                  <p className="title">
                    <a href={`/movie/${movie.id}`}>{movie.original_title}</a>
                  </p>
                </div>

              </a>
            </div>

          ))}
        </div>
      </div>
      {state.isLoading && <Spinner/>}
    </>
  )
}

export default Search

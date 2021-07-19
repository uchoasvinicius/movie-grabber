import React from 'react'
import Heart from '@/presentation/components/heart/heart'
import { set } from '@/presentation/hooks/useLocalStorage'
import { MovieModel } from '@/interfaces/models/movie-model'
import { extImg, noImg } from '@/presentation/components/movie-card/const'

interface IProps {
  movie: MovieModel
  active: true
}

const MovieCard: React.FC<IProps> = ({ movie, active }: IProps) => {
  return (<div key={movie.id} className="col-6 col-sm-4 col-lg-3">
    <a title={movie.original_title}>
      <div className="card">
        <div className="square">
          <div className="square-blur"
            style={{ backgroundImage: `url('${((movie.poster_path !== null) ? extImg + movie.poster_path : noImg)}')` }}>
          </div>
          <div className="buttons">
            <Heart movie={movie.id.toString()} set={set} active={active}/>
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
  </div>)
}

export default MovieCard

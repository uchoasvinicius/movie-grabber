import React from 'react'
import Styles from './movie-styles.scss'

const Movie: React.FC = () => {
  return (
    <div className="container-fluid">
      <header className={Styles.header}>
        <h1>Movie Grabber</h1>
      </header>
      <form>
        <input type="text"/>
        <button type="button">Search</button>
      </form>
      <footer>LeoVegas Test - Vinicius Uchoas</footer>
    </div>
  )
}

export default Movie

import React from 'react'
import Styles from './favorites-styles.scss'

const Favorites: React.FC = () => {
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

export default Favorites

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'
import Movie from '@/presentation/pages/movie/movie'
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        <Route exact path="/movie/:id" component={Movie}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

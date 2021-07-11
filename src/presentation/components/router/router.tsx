import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'
import Search from '@/presentation/pages/search/search'
import '@/presentation/styles/global.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        <Route exact path="/s/" component={Search}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

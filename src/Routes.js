import React from 'react'
import {Switch, Route} from 'react-router-dom'

import EmptyPage from './pages/EmptyPage'
import RatesPage from './pages/RatesPage'
import ChartsPage from './pages/ChartsPage'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={RatesPage} />
      <Route exact path="/charts" component={ChartsPage} />
      <Route component={EmptyPage} />
    </Switch>
  )
}
export default Routes;

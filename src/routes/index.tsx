import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import {Totais} from '../pages/Totais'

const Routes: React.FC = () => (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/exames' component={Totais} />
    </Switch>
  )

  export default Routes

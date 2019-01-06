import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './index.css'

import Home from './components/Home'
import PageUserDetail from './components/PageUserDetail'
import PageNotFound from './components/PageNotFound'

const App = () => (<Router>
  <div>
    <Switch>
      <Route path="/" exact="exact" component={Home}/>
      <Route path="/repositories/:id" component={PageUserDetail}/>
      <Redirect exact="exact" from="/users" to="/"/>
      <Route component={PageNotFound}/>
    </Switch>
  </div>
</Router>)

ReactDOM.render(<App/>, document.getElementById('root'))

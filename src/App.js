import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './Style/App.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import List from './Components/List';
import Table from './Components/Table';

const App = () => {
  const exerciseData = require('./data/exerciseData.json')
  const studentData = require('./data/studentData.json')

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/students' children={<List data={studentData} />} />
          <Route exact path='/exercises' children={<List data={exerciseData} />} />
          <Route path='/table' component={Table} />
          <Route path='/:name' component={Home} />
        </Switch>
      </Router>
    )
}

export default App;
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Films from './components/films';
import People from './components/people';



class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
      <Link to="/"> HOME </Link>
      <Link to="/films"> FILMS</Link>
      <Link to="/people"> PEOPLE</Link>
      <Switch>
      <Route exact path="/films" component={Films} />
      <Route exact path="/people" component={People} />
      <Route path="/films/:id" componenent={Films} />
      </Switch>
      
      
      </Fragment>
      </Router>
    );
  }
}

export default App;

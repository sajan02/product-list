import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch } from 'react-router-dom';
import Container from './component/Container';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute'

export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Container} />
        </Switch>
      </div>
    )
  }
}

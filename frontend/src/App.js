import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Users from './components/Users/Users';
import Register from './components/Users/Register';
import PrivateRoute from "./components/Users/PrivateRoute";
import Login from './components/Users/Login';
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        React App

        <Route
          exact
          path="/login"
          render={props => (
            <Login
              {...props}
            />
          )} />


        <Route
          path="/register"
          render={props => (
            <Register
              {...props}
            />
          )} />

        <PrivateRoute
          exact
          path="/users"
          component={props => (
            <Users
              {...props}
            />
          )} />

      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);

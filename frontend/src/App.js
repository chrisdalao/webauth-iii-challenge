import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Users from './components/Users/Users';
import Register from './components/Users/Register';
import PrivateRoute from "./components/Users/PrivateRoute";
import Login from './components/Users/Login';
import { connect } from "react-redux";
import { logout } from './actions';


class App extends React.Component {
  logout() {
    this.props.logout();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        React App

        {this.props.loggedIn &&
          <div className="user-links">
            <button className="logout-btn" onClick={() => this.logout()}>Logout</button>
          </div>}

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
    loggedIn: state.loginReducer.loggedIn,
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(App);

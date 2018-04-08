import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import axios from "axios";
import { getToken } from './services/tokenService';

class App extends Component {
  state = {
    user: '',
    token: null
  };

  setUser = user => {
    // Set the current user into state.
    this.setState({ user });
  };

  componentDidMount() {
    // When the app loads, try and get the current user
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    // 1. Try and retrieve the user's token
    const token = getToken();

    // 2. If they have a token, make a request to /user/current for their user details
    if (token) {
      axios.get('/user/current', {
        // 3. Pass the token as an Authorization Header
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
         // 4. If a successful response returns, store the user in state.
         if (res.status === 200) {
            const user = res.data.payload
            this.setUser(user);
         }
      })
    }
  };

  render() {
    return (
      <div className="App">
        <Header title="Expense Manager" />
        <Router>
          <div>
            <Switch>
            <Route 
                exact 
                path="/login" 
                render={ () => {
                  if (this.state.user) {
                    return <Redirect to="/" />;
                  } else {
                    return <Login getCurrentUser={this.getCurrentUser} />;
                  }
                }} 
              />
              <Route 
                exact 
                path="/signup" 
                render={ (props) => {
                  if (this.state.user) {
                    return <Redirect to="/" />;
                  } else {
                    return <Signup history={props.history} setUser={this.setUser} />;
                  }
                }} 
              />
              <Route 
                exact 
                path="/" 
                render={ () => {
                  if (this.state.user ) {
                    return <Dashboard setUser={this.setUser} />
                  } else {
                    return <Redirect to="/login" />
                  }
                }} 
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'

class App extends Component {
  state = {
    user: "null"
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
                    return <Login />;
                  }
                }} 
              />
              <Route 
                exact 
                path="/signup" 
                render={ () => {
                  if (this.state.user) {
                    return <Redirect to="/" />;
                  } else {
                    return <Signup setUser={this.setUser} />;
                  }
                }} 
              />
              <Route 
                exact 
                path="/" 
                render={ () => {
                  if (this.state.user) {
                    return <Dashboard />
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
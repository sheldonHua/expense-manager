import React, { Component } from 'react';


class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <form>
              <div>
                <label htmlFor="login-email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="email"
                />
              </div>
              <div>
                <label htmlFor="login-password">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="Enter your desired password"
                />
              </div>
              <div>
                <input type="submit" value="Log In" />
              </div>
            </form>
          );
    }
}

export default Login;
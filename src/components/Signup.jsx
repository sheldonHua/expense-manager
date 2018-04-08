import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // 1. Grab the email and password out of the component state
    const { name, email, password } = this.state
    // 2. Send POST to /auth/signup/ with email and password
    axios
      .post('/auth/signup', { name, email, password })
      .then(res => {
         // 3. if successful, set user into state
         if (res.status === 200) {
           const user = res.data.payload
          //  this.props.setUser(user)
          console.log(this.props.history);
          this.props.history.push('/login')
         }
      })
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="name"
            onChange={this.handleChange}
            name="name"
            id="name"
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            onChange={this.handleChange}
            name="email"
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="email">Password: </label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            id="password"
            placeholder="Enter your desired password"
          />
        </div>
        <div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    );
  }
}

export default Signup;

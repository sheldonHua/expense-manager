import React, { Component } from 'react';
import Header from './components/Header'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import axios from 'axios'

class App extends Component {
  state = {
    description: '',
    cost: undefined,
    items: []
  }
  
  refresh = () => {
    axios.get("/expenses").then(res => {
      if (res.data.payload) {
        console.log(res.data.payload);
        this.setState({ items: res.data.payload });
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/addExpense`, { description: this.state.description, cost: this.state.cost } ).then(this.refresh)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value } );
  }

  removeItem = (id) => {
    axios.delete(`/expenses/${id}`).then(this.refresh)
  }

  componentDidMount () {
    this.refresh()
  }

  render() {
    return (
      <div className="App">
        <Header title="Expense Manager" />
        <AddExpense
          expense={this.state.expense}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ExpenseList
          removeItem={this.removeItem}
          itemList={this.state.items}
        />
      </div>
    );
  }
}

export default App;
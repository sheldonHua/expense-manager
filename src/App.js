import React, { Component } from 'react';
import Header from './components/Header'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import axios from 'axios'

class App extends Component {
  state = {
    expense: '',
    items: []
  }
  
  refresh = () => {
    axios.get("/expense").then(res => {
      if (res.data.payload) {
        console.log(res.data.payload);
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const itemList = this.state.items;

    if (this.state.expense !== '') {
      itemList.unshift({
        expense: this.state.expense,
        key: Date.now()
      });
    }
    this.setState({
      items: itemList,
      expense: ''
    })
  }

  handleChange = (e) => {
    this.setState({ expense: e.target.value });
  }

  removeItem = (key) => {
    const itemList = this.state.items;
    const newItemListem = itemList.filter(item => {
      return (item.key !== key);
    });

    this.setState({
      items: newItemListem
    });
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
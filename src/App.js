import React, { Component } from 'react';
import Header from './components/Header'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

class App extends Component {
  state = {
    value: '',
    items: []
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const itemList = this.state.items;

    if (this.state.value !== '') {
      itemList.unshift({
        value: this.state.value,
        key: Date.now()
      });
    }
    this.setState({
      items: itemList,
      value: ''
    })
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
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

  render() {
    return (
      <div className="App">
        <Header title="Expense Manager" />
        <AddExpense
          expense={this.state.value}
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
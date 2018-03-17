import React, { Component } from 'react';
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Expense Manager" />
        <ExpenseForm />
      </div>
    );
  }
}

export default App;
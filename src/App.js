import React, { Component } from 'react';
import Header from './components/Header'
import AddExpense from './components/AddExpense'
import ShowExpense from './components/ShowExpense'
import axios from 'axios'

class App extends Component {
  state = {
    category: [],
    selectedCategory: '',
    description: '',
    cost: undefined,
    date: '',
    items: []
  }

  category = () => {
    axios.get("/category").then(res => {
      if (res.data.payload) {
        this.setState({ 
          category: res.data.payload });
      }
    });
  }
  
  refresh = () => {
    axios.get("/expenses").then(res => {
      if (res.data.payload) {
        this.setState({ 
          items: res.data.payload });
      }
    });
  };

  handleSubmit = (e) => {
    axios.post(`/addExpense`, 
      { 
        selectedCategory: this.state.selectedCategory,
        description: this.state.description, 
        cost: this.state.cost,
        date: this.state.date
      })
      .then(this.refresh);
    this.setState({ description: '', cost: ''  } );
    
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value } );
  }

  removeItem = (id) => {
    axios.delete(`/expenses/${id}`).then(this.refresh)
  }

  componentDidMount () {
    this.category()
    this.refresh()
  }

  render() {
    return (
      <div className="App">
        <Header title="Expense Manager" />
        <AddExpense
          description={this.state.description}
          cost={this.state.cost}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          categories={this.state.category}
        />
        <ShowExpense
          removeItem={this.removeItem}
          itemList={this.state.items}
        />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import AddExpense from './AddExpense'
import ShowExpense from './ShowExpense'
import axios from 'axios'
import { getToken } from "../services/tokenService";
import Logout from './Logout'
import TotalExpense from './TotalExpense'
import FilterData from './FilterData'

class Dashboard extends Component {
  state = {
    category: [],
    selectedCategory: '',
    description: '',
    cost: undefined,
    date: '',
    items: [],
    totalExpense: undefined,
    filter: {
      years: []
    }
  }

  totalSum = () => {
    const expenses = this.state.items;

    const totalExpense = expenses.map(expense => {
      return expense.cost;
    })
    .reduce((total, expense) => {
      return total + expense;
    });

    this.setState({
      totalExpense
    });
  }

  getYears = () => {
    const expenses = this.state.items;

    const years = expenses.map(expense => {
      return expense.date.split('-')[0];
    })

    const uniq = [ ...new Set(years) ];

    this.setState({
      filter: {
        years: uniq
      }
    })
    console.log(this.state.filter.years);
  }

  category = () => {
    axios.get("/category").then(res => {
      if (res.data.payload) {
        this.setState({
          category: res.data.payload
        });
      }
    });
  }

  refresh = () => {
    const token = getToken()
    axios.get("/expense/get", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.data.payload) {
        this.setState({
          items: res.data.payload
        });
        this.totalSum();
        this.getYears();
      }
    });
   
  };

  handleSubmit = (e) => {
    const token = getToken()

    axios.post('/expense/post',
      {
        selectedCategory: this.state.selectedCategory,
        description: this.state.description,
        cost: this.state.cost,
        date: this.state.date
      },
      {
        headers: {
          //  b - the Authorization Header Bearer <token>
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(this.refresh);
    this.setState({ description: '', cost: '' });

    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  removeItem = (id) => {
    axios.delete(`/expense/delete/${id}`).then(this.refresh)
  }
  
  componentDidMount() {
    this.category();
    this.refresh();
  }

  render() {
    return (
      <div className="dashboard">
        <AddExpense
          description={this.state.description}
          cost={this.state.cost}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          categories={this.state.category}
        />
        <FilterData years={this.state.filter.years} />
        <ShowExpense
          removeItem={this.removeItem}
          itemList={this.state.items}
        />
        <Logout setUser={this.props.setUser} />

        <TotalExpense totalExpense={this.state.totalExpense} />
      </div>
    );
  }
}

export default Dashboard;
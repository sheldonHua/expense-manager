import React, { Component } from 'react';

import ExpenseItem from './ExpenseItem'

class ExpenseForm extends Component {
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
            items: itemList
        })

        this.state.value = '';
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    delete = (key) => {
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <button type="submit">Add</button> 
                </form>
                <ExpenseItem delete={this.delete} itemList={this.state.items} />
            </div>
        );
    }
}

export default ExpenseForm;
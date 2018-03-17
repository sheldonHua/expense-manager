import React, { Component } from 'react';


class ExpenseItem extends Component {   
    createList = (item) => {
        return <li key={item.key} >{item.value} <button onClick={() => this.delete(item.key)}>Remove</button> </li>;
    }
    delete = (key) => {
        // Pass item key to TodoForm component to execute function
        this.props.delete(key);
    }

    render() {
        const itemList = this.props.itemList;
        return (
            <ul>
                { itemList.map(this.createList) }
            </ul>
        );
    }
}

export default ExpenseItem;
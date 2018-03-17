import React from 'react';

const ExpenseList = props => {
    const { itemList, removeItem } = props

    const createList = (item) => {
        return (
            <li key={item.key} >
                {item.expense}
                <button onClick={() => removeItem(item.key)}>Remove</button>
            </li>
        )
    }
    return (
        <ul>
            {itemList.map(createList)}
        </ul>
    )
}

export default ExpenseList;
import React from 'react';

const ExpenseList = props => {
    const { itemList, removeItem } = props

    const createList = (item) => {
        return (
            <li key={item._id} >
                {item.description}
                <button onClick={() => removeItem(item._id)}>Remove</button>
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
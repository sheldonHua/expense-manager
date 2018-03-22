import React from 'react';

const ShowExpense = props => {
    const { itemList, removeItem } = props

    const createList = (item) => {
        return (
            <li key={item._id} >
                {item.description}
                {item.cost}
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

export default ShowExpense;
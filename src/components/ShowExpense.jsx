import React from 'react';

const ShowExpense = props => {
    const { itemList, removeItem } = props

    console.log(itemList)

    const createList = (item) => {
        return (
           
            <tr key={item._id} >
                <td>{item.selectedCategory}</td>
                <td> {item.description}</td>
                <td>${item.cost}</td>
                <td><button onClick={() => removeItem(item._id)}>Remove</button></td>
            </tr>
            
        )
    }
    return (
        <table>
        <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Remove</th>
        </tr>
            {itemList.map(createList)}
        </table>

    )
}

export default ShowExpense;
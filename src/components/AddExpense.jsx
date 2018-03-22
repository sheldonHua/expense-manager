import React from 'react'

const AddExpense = (props) => {
    const { description, cost , handleChange, handleSubmit, category } = props
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <select name="category">
                    <option value=""></option>
                </select>
                <input name="description" type="text" value={description}  onChange={handleChange}  />
                <input name="cost" type="number" value={cost} onChange={handleChange}  />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddExpense
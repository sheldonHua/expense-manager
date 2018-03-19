import React from 'react'

const AddExpense = (props) => {
    const { handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input name="description" type="text"  onChange={handleChange}  />
                <input name="cost" type="number" onChange={handleChange}  />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default AddExpense
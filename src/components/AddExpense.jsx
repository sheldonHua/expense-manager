import React from 'react'

const AddExpense = (props) => {
    const { expense, handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={expense} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default AddExpense
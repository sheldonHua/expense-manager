import React from 'react'



const AddExpense = (props) => {
    const { description, cost , handleChange, handleSubmit, categories, date } = props

    const dropdownOptions = (option) => {
       return option.category.map((item, i) => {
            return (
                <option key={i} value={item}>{item}</option>
            )
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <select name="selectedCategory" onChange={handleChange} >
                    <option>Select</option>
                    {categories.map(dropdownOptions)}
                </select>
                <input name="description" type="text" value={description}  onChange={handleChange}  />
                <input name="cost" type="number" value={cost} onChange={handleChange}  />
                <input name="date" type="date" value={date} onChange={handleChange}  />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddExpense
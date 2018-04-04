import React from 'react';

const FilterData = ({ years, months, filterYear, filterMonth, selected, disabled, clientItems }) => {

    const uniqueYears = [ ...new Set(years) ]    

    const uniqueMonths = [ ...new Set(months) ]  

    console.log('monthssssssssssssssss', months)

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const createYears = (item, i) => {
       return (
           <option key={i} value={item}>{item}</option>
       )
    }

    const createMonths = (item, i) => {
    

        return (
            <option key={i} value={item}>{monthNames[item-1]}</option>
        )
     }

    return (
        <div>
            <select onChange={filterYear}>
                {uniqueYears.map(createYears)}
            </select>
            <select onChange={filterMonth}>
                <option value="any">Any</option>
                {uniqueMonths.map(createMonths)}
            </select>
        </div>
    );
}

export default FilterData;
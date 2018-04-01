import React from 'react';

const FilterData = ({ years, filterYear, selected, disabled }) => {

    const uniqueYears = [ ...new Set(years) ]

    const createOptions = (item, i) => {
       return (
           <option key={i} value={item}>{item}</option>
       )
    }

    return (
        <div>
            <select onChange={filterYear}>
                <option selected={selected} value="any">Any</option>
                {uniqueYears.map(createOptions)}
            </select>
            <select disabled={disabled}>
                <option>Month</option>
            </select>
        </div>
    );
}

export default FilterData;
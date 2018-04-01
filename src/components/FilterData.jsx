import React from 'react';

const FilterData = ({ years }) => {

    console.log(years);

    const createOptions = (item, i) => {
       return (
           <option key={i} value={item}>{item}</option>
       )
    }

    return (
        <div>
            <select>
                <option>Year</option>
                {years.map(createOptions)}
            </select>
            <select>
                <option>Month</option>
            </select>
            <button>Submit</button>
        </div>
    );
}

export default FilterData;
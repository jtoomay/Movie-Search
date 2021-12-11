import React from "react"
import Proptypes from 'prop-types'

export function Filter({ setFilter, filter }) { 
    return (
        <label>
            Search:  
            <input
                className="movie-search"
                onChange={ (e) => setFilter(e.target.value) } value={filter} 
            />
        </label>
    ); 
}

Filter.propTypes = { 
    filter: Proptypes.string.isRequired, // This will require a string or else the component will not function properly 
    setFilter: Proptypes.func.isRequired, 
}
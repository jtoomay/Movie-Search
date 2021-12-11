import React, { useState } from 'react'; 

export function Counter() { 

    // const [ state, setState ] = useState(defaultState)
    const [ count, setCount ] = useState(0);  // 0 Will be default state
    
    return (
        <div> 
            <h3> {count} </h3>
            <button 
                onClick={ () => setCount(count + 1) }
                >
                +
                </button>
                <button 
                    onClick={ () => setCount(count - 1) }
                > 
                - 
                </button>
        </div>
    )
}
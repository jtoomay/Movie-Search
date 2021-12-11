import React, { useState } from 'react' ; // Import react and useState 

export function Accordion() { // Export this and import this on the App.js file 
    
    const [isToggled, setIsToggled ] = useState(false) // This will make the default value hidden 

    return(
        <div> 
            { isToggled && // Conditional Statement. If the state is set to true, show the string 
                <h3> Show Me </h3>
            }
            <button
                onClick={ () => setIsToggled(!isToggled) } // This will set the opposite of the boolean "isToggled" everytime it is clicked
            > Toggle </button>
        </div>
    )
}
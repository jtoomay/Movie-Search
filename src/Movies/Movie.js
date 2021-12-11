import React from "react"
import Proptypes from 'prop-types'
import { Link } from "react-router-dom" // This lets us route to other websites easier

// Component, pass the props "movie" and "config"
export function Movie( { movie, config } ) {
    return (
        <>
            <Link to={`Movie/${movie.id}`}> {/* Link to the movie details */ }
        {config.images?.base_url && ( // This should make sure that the config is configed and the base.url exists 
            <img 
                src={config.images.base_url + "w342" + movie.poster_path} // Image URL
                alt={movie.title + "Poster"} 
                
            />
         ) }
      
           <a className="movie-title"><h3> {movie.title} </h3></a>  { /* Title of the movie */ }
           </Link> { /* Since the link is the whole image of the poster, wrap it around all of the specific movie's elements */ }
        </>
    ); 
}

Movie.propTypes = { 
        movie: Proptypes.shape({    // "shape" is almost like accessing the folder, then telling the browser that we need to find a specific file in the folder 
        id: Proptypes.number.isRequired, // This is the id of the movie
        title: Proptypes.string.isRequired, // The name would be the specific file in the folder we would be looking for 
        poster_path: Proptypes.string.isRequired, // This is the name of the image in the object
    }).isRequired, 
        config: Proptypes.shape({ 
        images: Proptypes.shape({ 
        base_url: Proptypes.string,
        }),
    }),
}
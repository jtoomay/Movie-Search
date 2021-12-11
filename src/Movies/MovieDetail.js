import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


// URL's/Links for the API 
const BASE_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "?api_key=" + process.env.REACT_APP_MOVIE_API
const Backdrop_URL = "https://image.tmdb.org/t/p/"
const Backdrop_Size = "original"
const Poster_Size = "w342"

// Movie Details Component
export function MovieDetail() { 
    const { id } = useParams() // This will get the ID out of the link using useParams
    const [movie, setMovie] = useState({}) // This will set the state of movie to an empty object, it will then let setMovie add to the object
    const getMovie = async () => { // Get the movie with an async function (This wont load technically until the second time the component is rerendered, see useEffect below)
        try{ 
            const res = await fetch(BASE_URL + id + API_KEY) // resource, this will fetch the API again and add the BASE_URL, Movie ID, and API_KEY all together to get the result
            const newMovie = await res.json() // Convert into JSON
            setMovie(newMovie ) // use setMovie to add the newMovie to the movie object
        } catch(e) { 
            console.error(e) // Error Message 
        }
    }

    // useEffect will fire when the content of the page is rerendered
    useEffect(() => { 
        getMovie() // Load the getMovie Function 
    }, [id]) // Everytime the ID is changed. Basically everytime the link is changed


    // If there is no movie.title (if the object hasnt been loaded yet, return null, this will cause the page to rerender and load everything in this time)
    if (!movie.title) return null

    
    return(
        <> { /* Container Element */ }

        <a className="go-back" href="/" /> 
        <img 
            className="backdrop"
            src={Backdrop_URL + Backdrop_Size + movie.backdrop_path}
            alt={movie.title + " Backdrop"}      
        />

        <div class="detail-details"> 
        <img 
            className="detail-poster"
            src={Backdrop_URL + Poster_Size + movie.poster_path}
            alt={movie.title + " Poster"}      
        />
        <div class="description-details">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p> { /* Description */ }
            <ul> 
               {movie.genres.map( (genre) => ( // Use this mapping function to sort through the array of genres and list out each genre 
                    <li key={genre.id}> {genre.name} </li> 
               ))}        
        </ul>    
        </div>        
        {/* This is for the back arrow logo that is used in the upper corner */ }
        <div className ="attribution">Icons made by <a href="" title="Fuzzee">Fuzzee</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div> 
        
       </> 
    )
}
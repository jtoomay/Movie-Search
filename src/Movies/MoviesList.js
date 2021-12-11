import React, { useState, useEffect } from "react"
import { Movie }  from './Movie'
import { Filter } from '../Filter'

// URL for the API request 
const API_URL = "https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key="
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key="; 

// Function Component
export function MoviesList() { 
    

    // Declarations for state 
    const [filter, setFilter] = useState("") 
    const [ movies, setMovies ] = useState([])
    const [ config, setConfig ] = useState([])

    // Function to fetch the API 
    const getMovies = async () => { 
        try { 
            const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API) // Hit the API... This will also get the API key from the .env file
            const movies = await res.json() // Get the response 
            setMovies(movies.results) // set the movie results to the array 
        }   catch (e) { 
            console.error(e)
        } 
    }
    const getConfig = async () => { 
        try{ 
            const res = await fetch(CONFIG_URL + process.env.REACT_APP_MOVIE_API) // Hit the API... This will also get the API key from the .env file
            const config = await res.json() // Get the response and turn it into json
            setConfig(config) 
        } catch (e) { 
            console.error(e)
        }
    }

    // This will run on mount to get the movies from the API 
    useEffect( () => { 
        getMovies()
        getConfig()
    }, [] ) 

    /* The first time this will run, the "movies" array will still be an array because thats what the state was set to. so this will work, there just will be no data, which means no output, 
    then the list will be loaded, and the next time this is ran it will have a movie to display */ 
    return ( 
            <div>
                <h1>Movie Search</h1> 
                <Filter filter={filter} setFilter={setFilter} />
            <ul className="movies_list"> 
            {movies
                .filter((movie) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map( (movie) => ( 
                        <Movie key={movie.id} config={config} movie={movie} />
                    ))}
            </ul>
        </div>
    )
}




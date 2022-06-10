import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard';

const MovieCardContainer = () => {
    let token = sessionStorage.getItem('tokens');

    const [ moviesList, setMoviesList ] = useState([]);


    const navigate = useNavigate();
    useEffect(()=>{
        !token && navigate("/")

        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=952755311db2f873f75c94c8db84b1c4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
        axios
            .get( endPoint )
            .then( movies =>{
                setMoviesList(movies.data.results);
            })
            .catch( error => {
                navigate("/Error");
            })

    },[])


  return (
    <>
    
    {  token &&
    <div className='container grid grid-cols-4 justify-items-center m-auto'>
        {moviesList.map( movie => {
            return(
                <>
                    <MovieCard key={movie.id} className='container' props = { movie } />
                </>
            )
        })}
    </div>
    }
    </>
  )
}

export default MovieCardContainer
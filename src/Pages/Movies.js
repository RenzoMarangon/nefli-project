import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCardContainer from '../components/MovieCardContainer/MovieCardContainer'
const Movies = () => {

    const [ fistMovie, setFirstMovie ] = useState({})

    const endPoint =  'https://api.themoviedb.org/3/discover/movie?api_key=952755311db2f873f75c94c8db84b1c4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';




    useEffect(()=>{
        axios.get(endPoint).then(movies => {
            setFirstMovie(movies.data.results[0])
        },)
    },[])
  return (
    <div className='movies-container '>
        <MovieCardContainer  />
    </div>
  )
}

export default Movies
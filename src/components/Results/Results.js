import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Results = () => {

    let query = new URLSearchParams( window.location.search );
    let search = query.get('search');

    const [ moviesResults, setMoviesResults ] = useState([]);

    useEffect(()=>{
        const endPoint =`https://api.themoviedb.org/3/search/movie?api_key=952755311db2f873f75c94c8db84b1c4&language=es-ES&query=${search}&page=1&include_adult=false`;
        axios.get( endPoint ).then( movies =>{
            // setMoviesResults( movies )
            console.log(movies.data)
        })
    },[])

    
  return (
    <>
    {/* {moviesResults.map( movie =>{
        console.log(movie)
    })} */}
    </>
  )
}

export default Results
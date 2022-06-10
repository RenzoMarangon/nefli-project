import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCardDetail = () => {

    const [ movie, setMovie ] = useState({});

    const navigate = useNavigate();
    const token = sessionStorage.getItem('tokens');
    useEffect(()=>{
        !token && navigate("/")
        getMovie();
    },[])

    const getMovie = () => {
        const query = new URLSearchParams( window.location.search );
        const movieID = query.get('movieID');

        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=952755311db2f873f75c94c8db84b1c4&language=es-MX`
        
        axios.get(endPoint)
             .then( movie =>{
                setTimeout(()=>{
                    setMovie( movie.data )
                },1000)
             })
             .catch(err => {
                navigate("/Error")
             })
    }

  return (
    <>
    {token &&
        movie.title != null ? (
            <>
            <div>{ movie.title }</div>
            </>
        ) : (
            <>
                <h2>Carganding</h2>
            </>
        )
    }
    </>
  )
}

export default MovieCardDetail
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserProvider'
import MovieCardFavorite from '../components/MovieCardFavorite/MovieCardFavorite';


const Favorites = () => {

    const { userFavoritesMovies, getMovies } = useContext( UserContext );

    const [ favMovies, setFavMovies ] = useState([])

    useEffect(()=>{
        setFavMovies( getMovies )
    },[ userFavoritesMovies ])



  return (
    <div className='h-100'>
      <h2>Favoritos</h2>
        {favMovies.map( movie => 
            <MovieCardFavorite props = { movie } />
        )}
    </div>
  )
}

export default Favorites
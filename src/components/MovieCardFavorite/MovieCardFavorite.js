import { Button } from '@mui/material';
import React,{ useContext } from 'react'
import UserContext from '../../context/UserProvider';
const MovieCardFavorite = ({ props }) => {
    const { title, id, name, first_air_date, release_date, overview, poster_path, vote_average } = props;

    const { userFavoritesMovies, deleteMovieFromFavorites } = useContext( UserContext );


    const deleteFromFavorites = (  ) => {
        deleteMovieFromFavorites(props)
    }

  console.log(props)

  return (
    <div>
        <p>{ !title ? name : title }</p>
        <p>{ !release_date ? first_air_date : release_date }</p>
        <p>{ vote_average }</p>
        <p>{ overview }</p>
        <p>{ poster_path }</p>
        <Button onClick={deleteFromFavorites}> Borrar favoritos </Button>
    </div>
  )
}

export default MovieCardFavorite
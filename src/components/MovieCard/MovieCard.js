import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserProvider';

const MovieCard = ({props}) => {
    const { title, poster_path, overview, id, vote_average, release_date } = props;

    const { addMoviesToFavorites } = useContext( UserContext );

    const addFavorite = () => {
      const movie = {
        id,
        poster_path,
        title,
        overview,
        release_date, 
        vote_average
      }

      addMoviesToFavorites( movie )
      
    }

  return (
    <div className='card-container' key={ id }>
        <img  className='w-80 rounded-lg' alt='...' src={`https://image.tmdb.org/t/p/w500/${ poster_path }`} />
        <div className='card-body container p-0.5'>
            <h2 className='font-bold text-white text-xl'>{ title }</h2>
            <p className='text-cyan-500 font-bold'>{ release_date.substring(0,4) }</p>
            <p className=' bg-sky-300 w-10 rounded-full text-center'> { vote_average } </p>
            <Link to={`/Detail?movieID=${ id }`}> Detashe </Link>
            <Button onClick={ addFavorite } > Agregar fav </Button>
        </div>
    </div>
  )
}

export default MovieCard
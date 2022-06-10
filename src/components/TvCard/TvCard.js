import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserProvider';

const TvCard = ({ props }) => {
    const { first_air_date, id, genre_ids, name, overview, poster_path, vote_average } = props;
    const { addMoviesToFavorites } = useContext( UserContext );


    const addFavorite = () => {
        const movie = {
          id,
          poster_path,
          name,
          overview,
          first_air_date, 
          vote_average
        }
  
        addMoviesToFavorites( movie )
        
      }
  
  return (
    <div className='card-container' key={ id }>
    <img  className='w-80 rounded-lg' alt='...' src={`https://image.tmdb.org/t/p/w500/${ poster_path }`} />
    <div className='card-body container p-0.5'>
        <h2 className='font-bold text-white text-xl'>{ name }</h2>
        <p className='text-cyan-500 font-bold'>{ first_air_date }</p>
        <p className=' bg-sky-300 w-10 rounded-full text-center'> { vote_average } </p>
        <Link to={`/Detail?movieID=${ id }`}> Detashe </Link>
        <Button onClick={ addFavorite } > Agregar fav </Button>
    </div>
</div>
  )
}

export default TvCard
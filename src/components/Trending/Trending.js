import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import TvCard from '../TvCard/TvCard';


const Trending = () => {

    const [ trendingList, setTrendingList ] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{

        const endPoint = 'https://api.themoviedb.org/3/trending/all/day?api_key=952755311db2f873f75c94c8db84b1c4&language=es-ES';
        axios
            .get( endPoint )
            .then( trending =>{
                setTrendingList(trending.data.results);
                console.log(trending.data.results)
            })
            .catch( error => {
                navigate("/Error");
            })

    },[])

  return (
    <div className='grid grid-cols-4 justify-items-center container m-auto'>
        {trendingList.map( trend => {
            console.log(trend)
        return(
            <>
            { trend.media_type === 'movie' && trend.poster_path != '' ? (
                <MovieCard props={ trend } />
            ) : (   
                trend.poster_path!='' && <TvCard props={ trend } />
            )}
            </>
        )
        })}
    </div>
  )
}

export default Trending
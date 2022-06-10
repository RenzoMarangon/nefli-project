import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TvCard from '../TvCard/TvCard';


const TvCardContainer = () => {

    let token = sessionStorage.getItem('tokens');

    const [ tvShows, setTvShows ] = useState([]);


    const navigate = useNavigate();

    useEffect(()=>{
        !token && navigate("/")

        const endPoint = 'https://api.themoviedb.org/3/discover/tv?api_key=952755311db2f873f75c94c8db84b1c4&language=es-ES&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';        axios
            .get( endPoint )
            .then( tvShows =>{
                setTvShows(tvShows.data.results);

            })
            .catch( error => {
                navigate("/Error");
            })

    },[])

  return (
    <>
    
    {  token &&
    <div className='grid grid-cols-4 justify-items-center container m-auto   '>
        {tvShows.map( tvShow => {
            
            return(
                <>
                    {tvShow.poster_path!=null && <TvCard key={tvShow.id} className='container' props = { tvShow } />}
                </>
            )
        })}
    </div>
    }
    </>
  )
}

export default TvCardContainer
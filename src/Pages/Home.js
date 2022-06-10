import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login'
import MovieCardContainer from '../components/MovieCardContainer/MovieCardContainer'
const Home = () => {
    const token = sessionStorage.getItem('tokens');
    const navigate = useNavigate();
    useEffect(()=>{
      token && navigate("/MovieList")

    },[])
  return (
    <div className='home-container'>
        {  !token &&
        ( 
          <div className='text-white flex flex-col items-center my-72'>
              <h1 className='text-4xl mb-4 font-bold'>Películas y series ilimitadas y mucho más.</h1>
              <h2 className='text-2xl mb-4'>Disfruta donde quieras. Cancela cuando quieras.</h2>
              <h3 className='text-xl mb-4'>¿Quieres ver Nefli ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
              <Login />
          </div>
        )
        }
    </div>
  )
}

export default Home
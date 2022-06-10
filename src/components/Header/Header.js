import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../Search/Search'

//MATERIAL UI
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Header = () => {

  const [value, setValue] = React.useState(0);

  const token = sessionStorage.getItem('tokens');

  const navigate = useNavigate();

  const navError = () => {
    navigate('/Error')
  }
  const navPopular = () => {
    navigate('/MovieList')
  }
  const navRecents = () => {
    navigate('/MovieList')
  }

  const navFavs = () => {
    navigate('/Favorites')
  }

  const navTrending = () => {
    navigate('/TrendingTopic')
  }

  const navTvShows = () => {
    navigate('/TvShows')
  }


  const changeBackground =(e)=>{
    //background-image: linear-gradient(to bottom, #141414, #1b1b1bc2, #222222b6, #292929a2, #30303093);
    e.currentTarget.addEventListener('scroll',()=>{
    })

  }
  
  //tabs
  const [tabBalue, setTabValue] = React.useState(0);

  const handSetTabValue = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
      <header onClick={changeBackground}>
          <nav className='navbar-container'>
            <Link to={"/"}>
              <img className='logo' src='https://fontmeme.com/permalink/220528/cda6669cb6c76f42b5692e01ecb08bc8.png' />
            </Link>

            {
              token ? (
                <div className='navbar-container__menu  ml-10 '>
                  
                  <ul className='grid grid-cols-5'>
                    <li><Link to='/TrendingTopic'>Inicio</Link></li>
                    <li><Link to='/TvShows'>Series</Link></li>
                    <li><Link to='/MovieList'>Películas</Link></li>
                    <li className='ml-4'><Link to='/Favorites'>Favoritos</Link></li>  
                  </ul>

                  <div className='self-end '>
                    <Search className='justify-self-end' />
                  </div>
                </div>
              ) : (
                <Button className='header-link'><Link to={'/Login'}> Iniciar Sesión </Link></Button>
              )
            }
          </nav>
      </header>
  )
}

export default Header
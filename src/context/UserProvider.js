import React,{ createContext, useEffect, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [ userFavoritesMovies = getMovies, setUserFavoritesMovies ] = useState([]);

    const addMoviesToFavorites = ( movie ) => {
        const movies =  JSON.parse(localStorage.getItem('movies'));
      
        if(movies == null  )
        {
          localStorage.setItem( 'movies', JSON.stringify( [movie] ) )
          console.log('se agrego por primera vez')
        }else if( !isMovie( movie ) ) {
          localStorage.setItem( 'movies', JSON.stringify( [...movies, movie] ))
          console.log('se agrego ')
          console.log(isMovie(movie))
        }

        setUserFavoritesMovies([ ...userFavoritesMovies, movie ]);
    }

    const deleteMovieFromFavorites = ( movie ) => {

      let movies =  JSON.parse( localStorage.getItem('movies') );

      movies!=null && 
      (
        movies = movies.filter( movieLocal => (  movieLocal.id != movie.id ) )
      )

      
      setUserFavoritesMovies( movies );

      localStorage.setItem( 'movies', JSON.stringify( movies ))

    }

    const isMovie =( movie ) => {
      const movies =  JSON.parse(localStorage.getItem('movies'));
      return movies.some(mov => mov.id==movie.id)
    }

    const getMovies = () => {
      const movies =  JSON.parse(localStorage.getItem( 'movies' ))
      return movies;
    }

    const data = {
        userFavoritesMovies,
        addMoviesToFavorites,
        deleteMovieFromFavorites,
        getMovies
    }

  return (
    <UserContext.Provider value = { data }> 
        { children }
    </UserContext.Provider>
  )
}

export default UserContext;

export { UserProvider }
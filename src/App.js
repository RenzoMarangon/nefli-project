import { Routes, Route } from 'react-router-dom';
import './App.css';
import './scss/App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieCardContainer from './components/MovieCardContainer/MovieCardContainer';
import Error from './components/Error/Error';
import MovieCardDetail from './components/MovieCardDetail/MovieCardDetail';
import Home from './Pages/Home';
import Results from './components/Results/Results';
import Favorites from './Pages/Favorites';
import LoginPage from './Pages/LoginPage';
import Movies from './Pages/Movies';
import TrendingTopic from './Pages/TrendingTopic';
import TvSeries from './Pages/TvSeries';
function App() {
  return (
    <div className="App  ">
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/MovieList' element={ <Movies /> } />
          <Route path='/Error' element={ <Error /> } />
          <Route path='/Detail' element={ <MovieCardDetail /> } />
          <Route path='/Results' element={ <Results /> } />
          <Route path='/Favorites' element={ <Favorites /> } />
          <Route path='/Login' element={ <LoginPage /> } />
          <Route path='/TrendingTopic' element={ <TrendingTopic /> } />
          <Route path='/TvShows' element={ <TvSeries /> } />
        </Routes>
    </div>
  );
}

export default App;

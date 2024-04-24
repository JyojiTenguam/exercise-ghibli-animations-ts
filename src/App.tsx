import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';
import { FilmType } from './types';

function App() {
  const [films, setFilms] = useState<FilmType[]>([]);
  const [favorites] = useState<FilmType[]>([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  const contextValue = {
    films,
    favorites,
  };

  return (
    <FilmsContext.Provider value={ contextValue }>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </FilmsContext.Provider>
  );
}

export default App;

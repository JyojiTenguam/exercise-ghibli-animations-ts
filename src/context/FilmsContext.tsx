// implemente a estrutura do context aqui.
import { createContext } from 'react';
import { FilmsContextType } from '../types';

const FilmsContext = createContext<FilmsContextType>({
  films: [],
  favorites: [],
});

export default FilmsContext;

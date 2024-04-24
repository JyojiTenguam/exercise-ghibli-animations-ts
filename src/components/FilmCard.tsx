// src/components/FilmCard.tsx
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import FilmsContext from '../context/FilmsContext';
import { FilmType } from '../types';
import '../style.css';

type Props = {
  film: FilmType;
  isFavorite: boolean;
};

function FilmCard({ film, isFavorite }: Props) {
  const { toggleFavorite } = useContext(FilmsContext);
  return (
    <figure key={ film.id }>
      <img src={ film.image } alt={ film.title } />
      <figcaption>
        <h2>{film.title}</h2>
        <p>{film.description}</p>
      </figcaption>
      <button type="button" onClick={ () => toggleFavorite(film) }>
        { isFavorite ? <FaHeart color="red" /> : <FaHeart />}
      </button>
    </figure>
  );
}

export default FilmCard;

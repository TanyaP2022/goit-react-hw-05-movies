import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastStyled } from './CastStyled';
import { CastMovies } from '../Services/FetchApi';

const DEFAULT_FOTO = 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png';

export const Cast = () => {
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    CastMovies(movieId).then(setCast);
  }, [movieId]);

  return (
    <CastStyled>
      <ul className='list'>
        {casts.cast &&
          casts.cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width={150}
                alt={name}
              />
              ) : (
              <img
                src={DEFAULT_FOTO}
                alt={''}
                width={150}
                height={300}
              />
              )
            }
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </CastStyled>
  );
};

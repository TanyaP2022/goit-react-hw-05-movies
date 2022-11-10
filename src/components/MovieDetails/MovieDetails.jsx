import { useEffect, useState } from 'react';
import {Outlet, useParams, Link, useLocation, useNavigate} from 'react-router-dom';
import { MovieDetailsStyled } from './MovieDetailsStyled';
import { DetalisMovies } from '../Services/FetchApi';

export default function MoviesDetalis() {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    DetalisMovies(movieId).then(setMovieInfo);
  }, [movieId]);
  
  if (!movieInfo) {
    return null;
  }
  const { genres, overview, title, vote_average, release_date, poster_path} = movieInfo;
  const toBack = location?.state?.from ?? '/';


  return (
    <MovieDetailsStyled>
      <button className='button' onClick={() => navigate(toBack)} >
        Go back
      </button>
      <div className='card'>
        <img
          width={200}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
        <div className='right'>
          <h2>{title}</h2>
          <p>
            <b>User score:</b> {vote_average * 10}%
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Release date:</b> {release_date}
          </p>
          {genres && (
            <div className='genres'>
              <b>Genres:</b>{' '}
              {genres.map(({ id, name }) => (
                <p className='text' key={id}>
                  {name}
                </p>
              ))}{' '}
            </div>
          )}
        </div>
      </div>
      <hr />
      <div >
        <h4 className='information'>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ from: toBack }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{from: toBack}}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </MovieDetailsStyled>
  );
}

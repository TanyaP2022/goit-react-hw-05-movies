import { useState, useEffect } from "react";
import { TrendMovies } from '../../components/Services/FetchApi';
import {  Link, useLocation } from 'react-router-dom';
import { HomeStyled } from './HomeStyled';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
      TrendMovies().then(setMovies);
    }, []);


  return (
    <div>
      <HomeStyled>
        <h2>Trending today</h2>
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id} >
                <Link to={`movies/${id}`} state={{ from: location.pathname }}>
                  {''}
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </HomeStyled>
    </div>
  );
}

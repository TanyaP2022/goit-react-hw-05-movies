import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { MoviesStyled } from './MoviesStyled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {KeywordMovies} from '../../components/Services/FetchApi'

export default function Movies() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
    
    
  useEffect(() => {
    if (query) {
      KeywordMovies(query).then(setMovies)
    }
  }, [query]);

  const handleChange = e => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast('I am waiting for your request');
      return;
    }
    setSearchParams(query !== '' ? { query: name } : {});
    e.target.reset();
  };

  return (
    <MoviesStyled>
      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
      <form className="container" onSubmit={handleSubmit}>
        <input className="input"
          type="text"
          autoComplete='off'
          onChange={handleChange}
          placeholder="Enter the query"
          name="query"
        />
        <button className='button' type='submit'>
            Search
        </button>
      </form>
      <ul>
        {movies && movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </MoviesStyled>
  );
}


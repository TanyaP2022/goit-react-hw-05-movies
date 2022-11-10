import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsMovies } from '../Services/FetchApi';
import {ReviewsStyled} from './ReviewsStyled'

export const Reviews = id => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ReviewsMovies(movieId).then(setReview);
  }, [movieId]);

  if (review.length === 0) {
    return <h2>There is no reviews</h2>;
  } else {
    return (
      <ReviewsStyled>
        {review &&
          review.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))
        }
      </ReviewsStyled>
    );
  }
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovies } from '../FetchMovies';

const Reviews = () => {
  const [movieReveiws, setMovieReveiws] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const ApiFetshListMovies = async () => {
      try {
        const OneMovie = await FetchMovies(`/movie/${movieId}/reviews`);
        console.log('Credit', OneMovie);
        const dataResult = [...OneMovie.data.results];
        setMovieReveiws(dataResult);
        console.log(dataResult);
      } catch (error) {
        console.log(error);
      }
    };
    ApiFetshListMovies();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReveiws.length > 0 ? (
          movieReveiws.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don`t have any reviews</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;

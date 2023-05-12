import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovies } from '../FetchMovies';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const ApiFetshListMovies = async () => {
      try {
        const OneMovie = await FetchMovies(`/movie/${movieId}/credits`);
        console.log('Credit', OneMovie);
        const dataCast = [...OneMovie.data.cast];
        setMovieCredits(dataCast);
        console.log(dataCast);
      } catch (error) {
        console.log(error);
      }
    };
    ApiFetshListMovies();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCredits.map(({ credit_id, name, profile_path }) => {
          return (
            <li key={credit_id}>
              <img src={profile_path} alt="photo actor"></img>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;

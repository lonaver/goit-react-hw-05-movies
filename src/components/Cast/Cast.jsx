import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovies, BASE_URL } from '../../FetchMovies';
import { ThumbImg, WrapperCasts } from './Cast.styled';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const ApiFetshListMovies = async () => {
      try {
        const OneMovie = await FetchMovies(`/movie/${movieId}/credits`);
        const dataCast = [...OneMovie.data.cast];
        setMovieCredits(dataCast);
      } catch (error) {
        console.log(error);
      }
    };
    ApiFetshListMovies();
  }, [movieId]);

  return (
    <div>
      <WrapperCasts>
        {movieCredits.map(({ credit_id, name, profile_path }) => {
          return (
            <li key={credit_id}>
              {profile_path ? (
                <ThumbImg>
                  <img src={BASE_URL + profile_path} alt={name}></img>
                </ThumbImg>
              ) : (
                <ThumbImg>
                  <span>No image...</span>
                </ThumbImg>
              )}
              <p>{name}</p>
            </li>
          );
        })}
      </WrapperCasts>
    </div>
  );
};
export default Cast;

import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { FetchMovies } from '../FetchMovies';

import {
  Container,
  WrapperMain,
  WrapperDetailsText,
  ThumbImg,
  WrapperGenres,
  ListAdditional,
  StyledLink,
  MainTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetail] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '';
  const backLinkLocationRef = useRef(backLinkHref);

  const { movieId } = useParams();
  useEffect(() => {
    const ApiFetshListMovies = async () => {
      try {
        const OneMovie = await FetchMovies(`/movie/${movieId}`);

        const dataMovie = OneMovie.data;
        setMovieDetail(dataMovie);
        console.log('One', dataMovie);
      } catch (error) {
        console.log(error);
      } finally {
        //homepage   original_title backdrop_path
      }
    };
    ApiFetshListMovies();
  }, [movieId]);
  // const KEY_API = '228d8284295592923c769d834cdf0ca4';
  // const pathCard = `https://api.themoviedb.org/3?api_key=${KEY_API}/movie/${movieId}${movieDetails.poster_path}`;
  // console.log('image', pathCard);
  return (
    <div>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      <Container>
        <WrapperMain>
          <ThumbImg>
            <img
              alt="movie"
              src={movieDetails.poster_path}
              width="160"
              height="220"
            ></img>
          </ThumbImg>
          <WrapperDetailsText>
            <MainTitle>{movieDetails.title}</MainTitle>
            <p>{movieDetails.overview}</p>
            <div>
              <h2>Genres</h2>
              <WrapperGenres>
                {movieDetails.genres?.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </WrapperGenres>
            </div>
          </WrapperDetailsText>
        </WrapperMain>
        <h2>Additional information</h2>
        <ListAdditional>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ListAdditional>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default MovieDetails;

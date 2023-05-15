import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { FetchMovies, BASE_URL } from '../../FetchMovies';

import {
  Container,
  WrapperMain,
  WrapperDetailsText,
  Img,
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
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    ApiFetshListMovies();
  }, [movieId]);

  return (
    <div>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      <Container>
        <WrapperMain>
          <Img
            alt="movie"
            src={BASE_URL + movieDetails.poster_path}
            width="160"
            height="220"
          ></Img>
          <WrapperDetailsText>
            <MainTitle>{movieDetails.title}</MainTitle>
            <h2>User Score:</h2>
            <p>{Number(movieDetails.vote_average) * 10}%</p>
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

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FetchMovies } from '../FetchMovies';
import { Link, useLocation } from 'react-router-dom';

import { Wrapper, Input, BtnSearch } from '../components/Movies.styled';

const Movies = () => {
  const [arrayMoviesSearch, setArrayMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  useEffect(() => {
    const movieName = searchParams.get('query') ?? '';
    console.log('inUseEffect', typeof movieName);

    if (movieName.trim() === '') return;

    const ApiFetshListMovies = async () => {
      try {
        const listMovies = await FetchMovies(
          `/search/movie`,
          `&${searchParams}`
        );
        const arrayMovies = [...listMovies.data.results];
        setArrayMoviesSearch(arrayMovies);
      } catch (error) {
        console.log(error);
      }
    };
    ApiFetshListMovies();
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setArrayMoviesSearch([]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Wrapper>
          <BtnSearch type="submit">
            <span>Search</span>
          </BtnSearch>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            id="search"
          />
        </Wrapper>
      </form>
      <ul>
        {arrayMoviesSearch.length > 0 ? (
          arrayMoviesSearch.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })
        ) : (
          <p>Nothing...</p>
        )}
      </ul>
    </div>
  );
};

export default Movies;

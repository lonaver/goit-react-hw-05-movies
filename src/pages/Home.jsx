import { useEffect, useState } from 'react';
import { FetchMovies } from '../FetchMovies';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [arrayMovies, setArayMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const ApiFetshListMovies = async () => {
      try {
        const listMovies = await FetchMovies('/trending/movie/day');
        const arrayMovies = [...listMovies.data.results];
        setArayMovies(arrayMovies);
      } catch (error) {
        console.log(error);
      }
    };
    ApiFetshListMovies();
  }, []);

  return (
    <main>
      Home{' '}
      <ul>
        {arrayMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;

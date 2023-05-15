import axios from 'axios';

const KEY_API = '228d8284295592923c769d834cdf0ca4';
export const BASE_URL = `https://image.tmdb.org/t/p/w500`;
//axios.defaults.baseURL('https://api.themoviedb.org/3/');

export async function FetchMovies(request = 'movie/76341', searchStr = '') {
  const response = await axios.get(
    `https://api.themoviedb.org/3/${request}?api_key=${KEY_API}${searchStr}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhkODI4NDI5NTU5MjkyM2M3NjlkODM0Y2RmMGNhNCIsInN1YiI6IjY0NWNkMDkyMTU2Y2M3MDE1ZTc5MGM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0OWXQGTi84goa4jFlG05fCrd_XVJjVqvLGWlyS6LTWg',
      },
    }
  );
  return response;
}

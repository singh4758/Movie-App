import axios from 'axios';

const API_KEY = '';

export const searchMovies = (query: string) => {
  return async (dispatch: any) => {
    try {
      const response = query ? await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`): { data: { Search: []}};
      const { data } = response;
      dispatch({
        type: 'SEARCH_MOVIES',
        payload: data.Search || []
      });
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };
};







import { combineReducers } from 'redux';
import { getShows, getShow, searchShows } from './shows';
import { getMovies, getMovie, searchMovies } from './movies';

const Reducer = combineReducers({
    getShows,
    getMovies,
    getMovie,
    getShow,
    searchMovies,
    searchShows
  });
  
export default Reducer;
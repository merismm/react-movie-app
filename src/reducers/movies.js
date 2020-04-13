import { movieConstants } from "../constants";

const initialState = {};

function getMovies(state = initialState, action) {
  switch (action.type) {
    case movieConstants.MOVIES_REQUEST:
      return {
        movies: action.movies
      };
    case movieConstants.MOVIES_SUCCESS:
      return {
        movies: action.movies
      };
    case movieConstants.MOVIES_FAILURE:
      return {};
    default:
      return state;
  }
}

function getMovie(state = initialState, action) {
  switch (action.type) {
    case movieConstants.MOVIE_REQUEST:
      return {
        movie: action.movie
      };
    case movieConstants.MOVIE_SUCCESS:
      return {
        movie: action.movie
      };
    case movieConstants.MOVIE_FAILURE:
      return {};
    default:
      return state;
  }
}

function searchMovies(state = initialState, action) {
  switch (action.type) {
    case movieConstants.SEARCHMOVIES_REQUEST:
      return {
        searchedMovies: action.searchedMovies
      };
    case movieConstants.SEARCHMOVIES_SUCCESS:
      return {
        searchedMovies: action.searchedMovies
      };
    case movieConstants.SEARCHMOVIES_FAILURE:
      return {};
    default:
      return state;
  }
}

export { getMovies, getMovie, searchMovies };

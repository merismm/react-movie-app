import { movieConstants } from '../constants';
import { movieService } from '../services';

function getMovies() {
  return dispatch => {
    dispatch(request());

    movieService.getTenMovies()
      .then(
        movies => dispatch(success(movies)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: movieConstants.MOVIES_REQUEST } }
  function success(movies) { return { type: movieConstants.MOVIES_SUCCESS, movies } }
  function failure(error) { return { type: movieConstants.MOVIES_FAILURE, error } }
}

function getMovieById(id) {
  return dispatch => {
    dispatch(request());

    movieService.getMovieById(id)
      .then(
        movie => dispatch(success(movie)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: movieConstants.MOVIE_REQUEST } }
  function success(movie) { return { type: movieConstants.MOVIE_SUCCESS, movie } }
  function failure(error) { return { type: movieConstants.MOVIE_FAILURE, error } }
}

function searchMovies(query) {
  return dispatch => {
    dispatch(request());

    movieService.searchMovies(query)
      .then(
        searchedMovies => dispatch(success(searchedMovies)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: movieConstants.SEARCHMOVIES_REQUEST } }
  function success(searchedMovies) { return { type: movieConstants.SEARCHMOVIES_SUCCESS, searchedMovies } }
  function failure(error) { return { type: movieConstants.SEARCHMOVIES_FAILURE, error } }
}

export const actionsMovie = {
  getMovies,
  getMovieById,
  searchMovies
};
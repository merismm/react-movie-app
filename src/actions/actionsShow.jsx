import { movieConstants } from '../constants';
import { showService } from '../services';

function getShows() {
  return dispatch => {
      dispatch(request());

      showService.getTenShows()
          .then(
            shows => dispatch(success(shows)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieConstants.SHOWS_REQUEST } }
  function success(shows) { return { type: movieConstants.SHOWS_SUCCESS, shows } }
  function failure(error) { return { type: movieConstants.SHOWS_FAILURE, error } }
}

function getShowById(id) {
  return dispatch => {
      dispatch(request());

      showService.getShowById(id)
          .then(
            show => dispatch(success(show)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: movieConstants.SHOW_REQUEST } }
  function success(show) { return { type: movieConstants.SHOW_SUCCESS, show } }
  function failure(error) { return { type: movieConstants.SHOW_FAILURE, error } }
}

function searchShows(query) {
  return dispatch => {
    dispatch(request());

    showService.searchShows(query)
      .then(
        searchedShows => dispatch(success(searchedShows)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: movieConstants.SEARCHSHOWS_REQUEST } }
  function success(searchedShows) { return { type: movieConstants.SEARCHSHOWS_SUCCESS, searchedShows } }
  function failure(error) { return { type: movieConstants.SEARCHSHOWS_FAILURE, error } }
}

export const actionsShow = {
  getShows,
  getShowById,
  searchShows
};
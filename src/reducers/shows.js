import { movieConstants } from "../constants";

const initialState = {};

function getShows(state = initialState, action) {
  switch (action.type) {
    case movieConstants.SHOWS_REQUEST:
      return {
        shows: action.shows
      };
    case movieConstants.SHOWS_SUCCESS:
      return {
        shows: action.shows
      };
    case movieConstants.SHOWS_FAILURE:
      return {};
    default:
      return state;
  }
}

function getShow(state = initialState, action) {
  switch (action.type) {
    case movieConstants.SHOW_REQUEST:
      return {
        show: action.show
      };
    case movieConstants.SHOW_SUCCESS:
      return {
        show: action.show
      };
    case movieConstants.SHOW_FAILURE:
      return {};
    default:
      return state;
  }
}

function searchShows(state = initialState, action) {
  switch (action.type) {
    case movieConstants.SEARCHSHOWS_REQUEST:
      return {
        searchedShows: action.searchedShows
      };
    case movieConstants.SEARCHSHOWS_SUCCESS:
      return {
        searchedShows: action.searchedShows
      };
    case movieConstants.SEARCHSHOWS_FAILURE:
      return {};
    default:
      return state;
  }
}

export { getShows, getShow, searchShows };

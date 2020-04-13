function getTenShows() {
  const requestOptions = {
    method: "GET"
  };

  return fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=8e2b11d47f223f0c9f6e9faa3686aa74&language=en-US&page=1",
    requestOptions
  ).then(handleResponse);
}

function getShowById(id) {
  const requestOptions = {
    method: "GET"
  };

  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=8e2b11d47f223f0c9f6e9faa3686aa74&language=en-US`,
    requestOptions
  ).then(handleResponse);
}

function searchShows(query) {
  const requestOptions = {
    method: "GET"
  };

  return fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=8e2b11d47f223f0c9f6e9faa3686aa74&language=en-US&page=1&query=${query}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(
    text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        console.log(error);
        return Promise.reject(error);
      }
      return data;
    },
    error => {
      console.log(error);
    }
  );
}

export const showService = {
  getTenShows,
  getShowById,
  searchShows
};

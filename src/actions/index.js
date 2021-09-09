import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { FAILED_FETCH_MOVIES, FETCH_MOVIES, SUCCESS_FETCH_MOVIES } from './types';
import { getWindowTop } from '../utils/methods';

// search and pagination action
// eslint-disable-next-line import/prefer-default-export
export const onChangeSearch = (params, page) => (dispatch) => {
  dispatch({ type: FETCH_MOVIES });
  let req1; let
    req2;
  if (page) {
    req1 = axios.get(BASE_URL, { params: { s: params, page: ((page * 2) - 1) } });
    req2 = axios.get(BASE_URL, { params: { s: params, page: (page * 2) } });
  } else {
    req1 = axios.get(BASE_URL, { params: { s: params, page: 1 } });
    req2 = axios.get(BASE_URL, { params: { s: params, page: 2 } });
    // eslint-disable-next-line no-param-reassign
    page = 1;
  }

  Promise.all([req1, req2]).then((responses) => {
    let movies = [];
    if (responses[0].data.Response === 'False') { // error scenario
      dispatch({
        type: FAILED_FETCH_MOVIES,
        payload: [],
        totalResults: 0,
        searchString: params,
        error: responses[0].data.Error,
        activePage: page,
      });
    } else {
      if (responses[0].data.Search) { // a request filled
        movies = responses[0].data.Search;
      }
      if (responses[1].data.Search) { // both request filled
        movies = [...movies, ...responses[1].data.Search];
      }
      dispatch({
        type: SUCCESS_FETCH_MOVIES,
        payload: movies,
        searchString: params,
        totalResults: responses[0].data.totalResults ?? null,
        error: null,
        activePage: page,
      });
      getWindowTop();
    }
  }).catch((err) => {
    dispatch({
      type: FAILED_FETCH_MOVIES,
      error: err.toLocaleString(),
    });
  });
};

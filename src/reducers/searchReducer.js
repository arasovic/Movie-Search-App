import { FAILED_FETCH_MOVIES, FETCH_MOVIES, SUCCESS_FETCH_MOVIES } from '../actions/types';

export const initialState = {
  loading: false,
  movies: [],
  totalResults: null,
  error: null,
  searchString: '',
  activePage: 1,
};

export default function searchReducer(state, action = {}) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_FETCH_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        totalResults: action.totalResults || null,
        searchString: action.searchString,
        activePage: action.activePage,
        error: null,
      };
    case FAILED_FETCH_MOVIES:
      return {
        ...state,
        loading: false,
        error: action.error,
        movies: [],
        searchString: action.searchString,
        activePage: 1,
        totalResults: 0,
      };
    default:
      return state;
  }
}

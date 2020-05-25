import {
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  FETCHING_JOKE,
  SHARE_JOKE,
  SHARE_JOKE__FAILURE,
  SHARE_JOKE_SUCCESS,
} from '../constants';

const initialState = {
  joke: {},
  isFetching: false,
  error: false,
};

export default function jokeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_JOKE:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        joke: action.data.value,
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case SHARE_JOKE:
      return {
        ...state,
        isFetching: true,
      };
    case SHARE_JOKE_SUCCESS:
      return {
        ...state,
        isFetching: true,
        data: action.data.value,
      };
    case SHARE_JOKE__FAILURE:
      return {
        ...state,
        isFetching: true,
        error: true,
      };
    default:
      return state;
  }
}

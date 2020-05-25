import {
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  FETCHING_JOKE,
} from '../constants';
import axios from 'axios';

export function fetchJoke() {
  return (dispatch) => {
    dispatch(getJoke());
    axios
      .get('http://api.icndb.com/jokes/random')
      .then(function (response) {
        return dispatch(getJokeSuccess(response.data));
      })
      .catch((err) => dispatch(getJokeFailure(err)));
  };
}

function getJoke() {
  return {
    type: FETCHING_JOKE,
  };
}

function getJokeSuccess(data) {
  return {
    type: FETCH_JOKE_SUCCESS,
    data,
  };
}

function getJokeFailure() {
  return {
    type: FETCH_JOKE_FAILURE,
  };
}

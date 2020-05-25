import {
  FETCH_EMAILS_SUCCESS,
  FETCH_EMAILS_FAILURE,
  FETCHING_EMAILS,
  ADD_EMAIL_SUCCESS,
} from '../constants';

const initialState = {
  emails: [],
  isFetching: false,
  error: false,
};

export default function emailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_EMAILS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_EMAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        emails: action.data,
      };
    case FETCH_EMAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case ADD_EMAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}

import {SHARE_JOKE} from '../constants';
import {SHARE_JOKE_SUCCESS} from '../constants';
import {SHARE_JOKE_FAILURE} from '../constants';

import axios from 'axios';

const Realm = require('realm');
class Emails {}
Emails.schema = {
  name: 'Emails',
  primaryKey: 'email',
  properties: {
    emailId: {type: 'int', default: 0},
    email: 'string',
    userName: 'string',
    domainName: 'string',
  },
};

const realm = new Realm({schema: [Emails]});

export function shareJoke(data) {
  // get schema Emails
  let Emails = realm.objects('Emails');
  console.log(Emails);

  //create an [] to populate with eamiles
  let emalis = [];

  // get joke from shareJoke(data)
  let joke = data.joke.joke;

  // push each email in  emalis  []
  for (const [key, val] of Object.entries(Emails)) {
    emalis.push(val.email);
  }
  // create payload object that will be pushed to API
  let payload = {
    joke: joke,
    emails: emalis,
  };

  return (dispatch) => {
    dispatch(postJoke());
    axios
      .post(`https://localhost./users`, {payload})
      .then(function (response) {
        return dispatch(shareJokeSuccess(response.data));
      })
      .catch((err) => dispatch(shareJokeFailure(err)));
  };
}

function postJoke() {
  return {
    type: SHARE_JOKE,
  };
}
function shareJokeSuccess(data) {
  return {
    type: SHARE_JOKE_SUCCESS,
    data,
  };
}

function shareJokeFailure() {
  return {
    type: SHARE_JOKE_FAILURE,
  };
}

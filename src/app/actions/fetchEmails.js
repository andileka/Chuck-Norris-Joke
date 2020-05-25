import {FETCH_EMAILS_SUCCESS, FETCHING_EMAILS} from '../constants';

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

export function fetchEmails() {
  return (dispatch) => {
    dispatch(getEmails());

    //get email data from realm db
    let data = realm
      .objects('Emails')
      // SORT them by: 1st Domain name, 2nd name part of the email
      .filtered('TRUEPREDICATE SORT(domainName ASC, userName ASC)');

    return dispatch(getEmailsSuccess(data));
  };
}

function getEmails() {
  return {
    type: FETCHING_EMAILS,
  };
}

function getEmailsSuccess(data) {
  return {
    type: FETCH_EMAILS_SUCCESS,
    data,
  };
}

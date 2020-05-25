import {ADD_EMAIL_SUCCESS} from '../constants';

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

export function addEmail(data) {
  const email = data;
  //get only the name from email
  const name = email.substring(0, email.lastIndexOf('@'));

  //get only the domain from email
  const domain = email.substring(email.lastIndexOf('@') + 1);

  // save the Emails email , userName, domainName in realm db

  realm.write(() => {
    realm.create('Emails', {
      emailId: Math.random(),
      email: email,
      userName: name,
      domainName: domain,
    });
  });
  return (dispatch) => {
    return dispatch(addEmailsSuccess(data));
  };
}

function addEmailsSuccess(data) {
  return {
    type: ADD_EMAIL_SUCCESS,
    data,
  };
}

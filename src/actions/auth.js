//put action creators here.
//and example might be:
import React, { Component } from 'react';
import { API_URL } from '../config/api';

// should be a pure function
export const registerClient = (firstName, lastName, email, password, confirm, terms) => {
  console.log('registerClient');
  return {
    type: 'REGISTER',
    payload: postRegisterlient(
      firstName,
      lastName,
      email,
      password,
      confirm,
      terms
    )
  }
}

function postRegisterlient(
  firstName,
  lastName,
  email,
  password,
  confirm,
  terms
) {
    let body = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email,
      password
    });

    console.log('body:', body);

    return fetch(`${API_URL}/api/v1/clients`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: body
      })
      .then((res) => {
         return res.json();
      });

}

export const authorizeClient = (email, password) => {
  console.log('authorizeClient');
  return {
    type: 'LOGIN',
    payload: postAuthorizeClient(
      email,
      password
    )
  }
}

function postAuthorizeClient(
  email,
  password
) {
    let body = JSON.stringify({
      email,
      password
    });

    return fetch(`${API_URL}/api/v1/token`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: body
      })
      .then((res) => {
         return res.json();
      });

}

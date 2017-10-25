//put action creators here.
//and example might be:
import React, { Component } from 'react';
import { API_URL } from '../config/api';

// should be a pure function
export const fetchClient = (clientId, token) => {
  console.log('fetchClient');
  return {
    type: 'GET_CLIENT',
    payload: getClient(
      clientId,
      token
    )
  }
}

function getClient(clientId,token) {
    return fetch(`${API_URL}/api/v1/clients/${clientId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    })
    .then(res => res.json());
}

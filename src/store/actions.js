import { API } from '../config';

const { headers, url } = API;

export default {
  login,
  signup
};

function login (context, payload) {
  const { commit } = context;
  const { email, password } = payload;

  const request = {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  };

  commit('startLoadingState');
  return fetch(`${url}/login`, request)
    .then(res => res.json())
    .then((data) => {
      const { error, token } = data;
      commit('stopLoadingState');
      if (error) {
        commit('setError', { error });
        throw new Error(error);
      } else {
        commit('setSession', { token, email });
      }
    });
}

function signup (context, payload) {
  const { commit } = context;
  const { email, password } = payload;

  const request = {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  };

  commit('startLoadingState');
  return fetch(`${url}/register`, request)
    .then(res => res.json())
    .then((data) => {
      const { error } = data;

      commit('stopLoadingState');
      if (error) {
        commit('setError', { error });
        throw new Error(error);
      }
    });
}

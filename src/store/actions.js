import { API } from '../config';

const { headers, userUrl, postUrl } = API;

export default {
  login,
  signup,
  getUsers,
  getUserDetails,
  getPosts,
  getPostDetails,
  getPostComments
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
  return fetch(`${userUrl}/login`, request)
    .then(res => res.json())
    .then((data) => {
      const { error, token } = data;
      commit('stopLoadingState');
      if (error) {
        commit('setError', { error });
        throw new Error(error);
      } else {
        commit('setSession', { token, email });
        return data;
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
  return fetch(`${userUrl}/register`, request)
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

function getUsers (context) {
  const { commit } = context;

  const request = {
    method: 'GET',
    headers
  };

  commit('startLoadingState');
  return fetch(`${userUrl}/users`, request)
    .then(res => res.json())
    .then((data) => {
      const { error, data: users } = data;

      commit('stopLoadingState');
      if (error) {
        commit('setError', { error });
        throw new Error(error);
      } else {
        commit('setUsers', { users })
        return data;
      }
    });
}

function getUserDetails (context, payload) {
  const { commit } = context;
  const { id } = payload;

  const request = {
    method: 'GET',
    headers
  };

  commit('startLoadingState');
  return fetch(`${postUrl}/users/${id}`, request)
    .then(res => res.json())
    .then((data) => {
      commit('stopLoadingState');
      commit('setUserDetails', { user: data });
      return data;
    });
}

function getPosts (context) {
  const { commit } = context;

  const request = {
    method: 'GET',
    headers
  };

  commit('startLoadingState');
  return fetch(`${postUrl}/posts`, request)
    .then(res => res.json())
    .then((data) => {
      commit('stopLoadingState');
      commit('setPosts', { posts: data });
      return data;
    });
}

function getPostDetails (context, payload) {
  const { commit } = context;
  const { id } = payload;

  const request = {
    method: 'GET',
    headers
  };

  commit('startLoadingState');
  return fetch(`${postUrl}/posts/${id}`, request)
    .then(res => res.json())
    .then((data) => {
      commit('stopLoadingState');
      commit('setPostDetails', { post: data });
      return data;
    });
}

function getPostComments (context, payload) {
  const { commit } = context;
  const { id } = payload;

  const request = {
    method: 'GET',
    headers
  };

  commit('startLoadingState');
  return fetch(`${postUrl}/comments?postId=${id}`, request)
    .then(res => res.json())
    .then((data) => {
      commit('stopLoadingState');
      commit('setPostComments', { comments: data });
      return data;
    });
}

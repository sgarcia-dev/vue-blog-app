export default {
  setUsers,
  setUserDetails,
  setPosts,
  setPostDetails,
  setPostComments,
  startLoadingState,
  stopLoadingState,
  setError,
  deleteError,
  setSession,
  deleteSession
};

function setUsers (state, payload) {
  state.data.users = payload.users;
}

function setUserDetails (state, payload) {
  state.data.userDetails = payload.user;
}

function setPosts (state, payload) {
  state.data.posts = payload.posts;
}

function setPostDetails (state, payload) {
  state.data.postDetails = payload.post;
}

function setPostComments (state, payload) {
  state.data.postComments = payload.comments;
}

function startLoadingState (state) {
  state.communication.loading = true;
}

function stopLoadingState (state) {
  state.communication.loading = false;
}

function setError (state, payload) {
  state.communication.error = payload.error;
}

function deleteError (state, payload) {
  state.communication.error = null;
}

function setSession (state, payload) {
  const { token, email } = payload;
  const newSessionData = { token, email };
  state.session = { ...state.session, ...newSessionData };
  window.localStorage.setItem('session', JSON.stringify(newSessionData));
}

function deleteSession (state, payload) {
  const newSessionData = { token: null, email: null };
  state.session = { ...state.session, ...newSessionData };
  window.localStorage.removeItem('session');
}

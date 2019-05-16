export default {
  setUsers,
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

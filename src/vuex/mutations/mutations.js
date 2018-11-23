export default {
  login (state, promise) {
    state.auth = promise
  },
  userInfo (state, user) {
    state.user = user
  }
}

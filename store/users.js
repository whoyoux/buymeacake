export const state = () => ({
    user: {
        isLogged: false,
        data: {}
    }
})

export const getters = {
    isLogged(state) {
        return state.user.isLogged
    },
    user(state) {
        return state.user;
    },
};

export const mutations = {
    SET_LOGGED_IN(state, value) {
        state.user.isLogged = value;
    },
    SET_USER(state, data) {
        state.user.data = data;
    }
}

export const actions = {
    fetchUser({ commit }, { authUser, claims }) {
        commit("SET_LOGGED_IN", authUser !== null);
        if (authUser) {
          commit("SET_USER", {
            displayName: authUser.displayName,
            email: authUser.email
          });
        } else {
          commit("SET_USER", null);
        }
      }
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: "Mr. Big Boy",
    },

    getters: {
        username: state => state.username,
    },

    actions: {
        changeName (context, username) {
            context.commit('CHANGE_NAME', username);
        }
    },

    mutations: {
        CHANGE_NAME (state, username) {
            state.username = username;
        }
    }
});


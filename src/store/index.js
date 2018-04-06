import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import base from './modules/base'
import Poker from './modules/Poker'

export default new Vuex.Store({
    modules: {
        base,
        Poker
    }
});


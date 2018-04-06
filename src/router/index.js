import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import Home from '../components/Home'
import PokerRoom from '../components/PokerRoom'

Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Welcome',
          component: Welcome
        },

        {
            path: '/home',
            name: 'Home',
            component: Home
        },

        {
            path: '/poker',
            name: 'PokerRoom',
            component: PokerRoom
        }
    ]
})
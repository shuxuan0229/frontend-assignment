import Vuex from 'vuex';
import Vue from 'vue';
import items from './modules/items';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        items
    }
});
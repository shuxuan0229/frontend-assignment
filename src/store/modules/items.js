import axios from 'axios';

const resource_uri = "http://localhost:3000/items/";

const state = {
    items: []
};

const getters = {
    allItems: state => state.items
};

const actions = {
    async fetchItems({ commit }) {
        const response = await axios.get(resource_uri);    
        commit('setItems', response.data);
    },
    async addItem( { commit }, item) {
        const response = await axios.post(resource_uri, item);
        commit('newItem', response.data);
    },
    async updateItem( { commit }, item) {
        const response = await axios.put(`${resource_uri}${item.id}`);
        commit('updateItemStatus', response.data);
    },
    async removeItem( { commit }, item) {
        const response = await axios.delete(`${resource_uri}${item._id}`);
        commit('deleteItem', response.data);
    }
};

const mutations = {
    setItems: (state, items) => state.items = items,
    newItem: (state, item) => state.items.push(item),
    updateItemStatus: (state, updatedItem) => {
        const index = state.items.findIndex(i => i.id === updatedItem._id);
        if(index !== -1) {
            state.items.splice(index, 1, updatedItem);
        }        
    },
    deleteItem: (state, item) => state.items = state.items.filter(i => item !== i._id),
};

export default {
    state, 
    getters, 
    actions, 
    mutations
}
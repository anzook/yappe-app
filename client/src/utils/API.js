import axios from 'axios';


export default {
    // create user
    createUser: function (userData) {
        return axios.post('/api/user', userData);
    },
    // create pet
    createPet: function (petData) {
        return axios.post('/api/pet', petData);
    },
    // creat action
    createAction: function (actionData) {
        return axios.post('/api/actions', actionData);
    },
    // get user
    getUser: function (id) {
        return axios.get('/api/user/' + id);
    },
    // get pet
    getPet: function (id) {
        return axios.get('/api/pet/' + id);
    },
    // get actions logged by user
    getUserLogs: function (id) {
        return axios.get('/api/actions/user' + id);
    },
    // get pet actions
    getPetActions: function (id) {
        return axios.get('/api/actions/pet' + id);
    },
    // update user
    updateUser: function (id, update) {
        return axios.put('/api/user/' + id, update);
    },
    // update pet
    updatePet: function (id, update) {
        return axios.put('/api/pet/' + id, update);
    },
    // update action
    updateAction: function (id, update) {
        return axios.put('/api/actions/' + id, update);
    },
    joinUser: function (id, data) {
        return axios.patch('/api/pet/' + id, data);
    },

}


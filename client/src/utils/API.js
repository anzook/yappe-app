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
        return axios.get('/api/actions/user/' + id);
    },
    // get pet actions
    getPetActions: function (petId) {
        return axios.get('/api/actions/pet/' + petId);
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
    joinUser: function (petId, data) {
        return axios.patch('/api/pet/' + petId, data);
    },
    deletePet: function (id) {
        return axios.delete('/api/pet/' + id)
    },
    deleteAction: function (id) {
        return axios.delete('/api/actions/' + id)
    }

}


import axios from 'axios';


export default {
    // create user
    // response returns user created id
    createUser: function (userData) {
        return axios.post('/api/user', userData);
    },
    // create pet
    // response returns all created pet info
    createPet: function (petData) {
        return axios.post('/api/pet', petData);
    },
    // creat action
    // response returns all created action info
    createAction: function (actionData) {
        return axios.post('/api/actions', actionData);
    },
    // get user
    // response returns user info as well as all
    // pets under user
    getUser: function (userId) {
        return axios.get('/api/user/' + userId);
    },
    // get pet
    // response returns pet info as well as all caretakers
    // of pet
    getPet: function (petId) {
        return axios.get('/api/pet/' + petId);
    },
    // get actions logged by user
    // response is all the actions the user logged
    getUserLogs: function (userId) {
        return axios.get('/api/actions/user/' + userId);
    },
    // get pet actions
    // response is all the actions the done by the pet
    getPetActions: function (petId) {
        return axios.get('/api/actions/pet/' + petId);
    },
    // update user
    updateUser: function (userId, update) {
        return axios.put('/api/user/' + userId, update);
    },
    // update pet
    updatePet: function (petId, update) {
        return axios.put('/api/pet/' + petId, update);
    },
    // update action
    updateAction: function (actionId, update) {
        return axios.put('/api/actions/' + actionId, update);
    },
    // join user to pet
    // reponse is the pet's info
    joinUser: function (petId, data) {
        return axios.patch('/api/pet/' + petId, data);
    },
    // delete pet
    deletePet: function (petId) {
        return axios.delete('/api/pet/' + petId)
    },
    // delete action
    deleteAction: function (actionId) {
        return axios.delete('/api/actions/' + actionId)
    }

}


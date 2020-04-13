import axios from 'axios';

// api functions
export default {
    // create user
    // response returns user created id
    createUser: function (userData) {
        return axios.post('/api/user', userData);
    },
    // logs in user
    // response returns session
    loginUser: function (userData) {
        return axios.post('/login', userData);
    },
    // logs out user
    // redirects to landing
    logoutUser: function () {
        return axios.get('/logout');
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
    // get user info from passport
    // response returns user info as well as all
    // pets under user
    getUserInfo: function () {
        return axios.get('/api/user');
    },
    // get pet
    // response returns pet info as well as all caretakers
    // of pet
    getPet: function (petId) {
        return axios.get('/api/pet/' + petId);
    },
      // get pets from array of pet Ids
    // response returns pet info as well as all caretakers
    // of pet
    getPets: function (petIds) {
        return axios.get('/api/pets/', petIds);
    },
    // get actions logged by user
    // response is all the actions the user logged
    getUserLogs: function (userId) {
        return axios.get('/api/actions/user/' + userId);
    },
    // get actions logged by user of a specific pet
    // response is all the actions the user logged
    getUserLogsByPet: function (userId, petId) {
        return axios.get('/api/actions/user/' + userId + '/pet/' + petId);
    },
    // get pet actions
    // response is all the actions the done by the pet
    getPetActions: function (petId) {
        return axios.get('/api/actions/pet/' + petId);
    },
    // get pet actions
    // response is all the actions the done by the pet
    getPetActionsByUser: function (petId, userId) {
        return axios.get(`/api/actions/pet/${petId}/user/${userId}`);
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
    },
    getBreeds: function () {
        return axios.get("https://dog.ceo/api/breeds/list/all");
    },
    createPost: function (post) {
        return axios.post('/api/posts/', post);
    },
    getPost: function (postID) {
        return axios.get('/api/posts/' + postID);
    },
    updatePost: function (postID, data) {
        return axios.put('/api/posts/' + postID, data);
    },
    deletePost: function (postID) {
        return axios.delete('/api/posts/' + postID);
    },
    getPetPost: function (petID) {
        return axios.get('/api/posts/pets/' + petID);
    },
}


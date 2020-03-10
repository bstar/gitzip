const axios = require('axios');

const baseUri = '/api';


export const fetchUserDetails = (payload, uriRoot = baseUri) => {

    // TODO refactor auth
    const [ username, password ] = payload.split(':');

    return axios.get(`${uriRoot}/users/${username}`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

export const fetchUserRepos = (payload, uriRoot = baseUri) => {

    // TODO refactor auth
    const [ username, password ] = payload.split(':');

    return axios.get(`${uriRoot}/users/${username}/repos`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

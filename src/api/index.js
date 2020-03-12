const axios = require('axios');

const baseUri = '/api';


export const fetchUserDetails = (payload, uriRoot = baseUri) => {

    // TODO refactor auth
    const { key } = payload;
    const [ username, password ] = key.split(':');

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
    const { key } = payload;
    const [ username, password ] = key.split(':');

    return axios.get(`${uriRoot}/users/${username}/repos`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

export const fetchUserRepoIssues = (payload, uriRoot = baseUri) => {

    const { repoName, key } = payload;
    const [ username, password ] = key.split(':');

    return axios.get(`${uriRoot}/repos/${username}/${repoName}/issues`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

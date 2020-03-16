const axios = require('axios');


export const fetchUserDetails = (payload) => {

    // TODO refactor auth
    const { key } = payload;
    const [ username, password ] = key.split(':');

    return axios.get(`/users/${username}`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

export const fetchUserRepos = (payload) => {

    // TODO refactor auth
    const { key } = payload;
    const [ username, password ] = key.split(':');

    return axios.get(`/users/${username}/repos`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

export const fetchUserRepoIssues = (payload) => {

    const { repoName, key } = payload;
    const [ username, password ] = key.split(':');

    return axios.get(`/repos/${username}/${repoName}/issues`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        });
};

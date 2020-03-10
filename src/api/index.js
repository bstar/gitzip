const axios = require('axios');

const baseUri = `/api/users`;


export const fetchUser = (payload, uriRoot = baseUri) => {

    const [ username, password ] = payload.split(':');

    return axios.get(`${uriRoot}/${username}`, { auth: { username, password }})
        .then(response => {
            return (response);
        })
        .catch(error => {
            return (error);
        })
};

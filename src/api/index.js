const axios = require('axios');

const baseUri = `/api`;


export const fetchUser = (payload, uriRoot = baseUri) => {

    return axios.get(uriRoot)
        .then(function (response) {
          // handle success
          return(response);
        })
        .catch(function (error) {
            return(error);
        })
};

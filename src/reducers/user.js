import {
    SET_GITHUB_KEY,
    GET_USER_SUCCESS,
    GET_USER_REPOS_SUCCESS,
    SET_ACTIVE_REPO,
    GET_USER_REPO_ISSUES_SUCCESS,
} from '../constants/ActionTypes';

const initialSettings = {};

const user = (state = initialSettings, action) => {

    switch (action.type) {

        case SET_GITHUB_KEY:

            return {
                ...state,
                key: action.payload,
            };

        case GET_USER_SUCCESS:

            return {
                ...state,
                login: action.payload.login,
                avatar_url: action.payload.avatar_url,
                url: action.payload.url,
                name: action.payload.name,
            };

        case GET_USER_REPOS_SUCCESS:

            return {
                ...state,
                repos: action.payload,
            };

        case SET_ACTIVE_REPO:

            return {
                ...state,
                activeRepoData: action.payload,
                issues: null,
            };

        case GET_USER_REPO_ISSUES_SUCCESS:

            return {
                ...state,
                issues: action.payload,
            };

        default:
            return state;
    }
};

export default user;

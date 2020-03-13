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
    
        const key = action.payload;

        return {
          ...state,
          key,
        }

      case GET_USER_SUCCESS:
  
        const userData = action.payload;

        return {
          ...state,
          login: userData.login,
          avatar_url: userData.avatar_url,
          url: userData.url,
          name: userData.name,
        }

      case GET_USER_REPOS_SUCCESS:

        const repos = action.payload;

        return {
          ...state,
          repos,
        }

      case SET_ACTIVE_REPO:

        const activeRepoData = action.payload;

        return {
          ...state,
          activeRepoData,
          issues: null,
        }

        case GET_USER_REPO_ISSUES_SUCCESS:

          const issues = action.payload;

          return {
            ...state,
            issues,
          }

      default:
        return state;
    }
  };
  
  export default user;
  
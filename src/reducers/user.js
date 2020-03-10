import {
    SET_GITHUB_KEY,
    GET_USER_SUCCESS,
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

      default:
        return state;
    }
  };
  
  export default user;
  
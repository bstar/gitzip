import {
    SET_GITHUB_KEY,
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
  
      default:
        return state;
    }
  };
  
  export default user;
  
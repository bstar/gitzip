import * as types from '../constants/ActionTypes';
import { universalActionCreator } from '../utils';


export const setGithubKey = (key, meta) => (universalActionCreator(types.SET_GITHUB_KEY, key, meta));
export const setGithubKeySuccess = (json, meta) => (universalActionCreator(types.SET_GITHUB_KEY_SUCCESS, json, meta));

export const getUser = (key, meta) => (universalActionCreator(types.GET_USER, key, meta));
export const getUserSuccess = (json, meta) => (universalActionCreator(types.GET_USER_SUCCESS, json, meta));

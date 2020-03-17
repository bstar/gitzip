import * as types from '../constants/ActionTypes';
import universalActionCreator from '../utils';


export const setGithubKey = (key, meta) => (universalActionCreator(types.SET_GITHUB_KEY, key, meta));
export const setGithubKeySuccess = (json, meta) => (universalActionCreator(types.SET_GITHUB_KEY_SUCCESS, json, meta));

export const getUser = (key, meta) => (universalActionCreator(types.GET_USER, key, meta));
export const getUserSuccess = (json, meta) => (universalActionCreator(types.GET_USER_SUCCESS, json, meta));

export const getUserReposSuccess = (json, meta) => (universalActionCreator(types.GET_USER_REPOS_SUCCESS, json, meta));

export const setActiveRepo = (id, meta) => (universalActionCreator(types.SET_ACTIVE_REPO, id, meta));

export const getUserRepoIssuesSuccess = (json, meta) => (universalActionCreator(types.GET_USER_REPO_ISSUES_SUCCESS, json, meta));

export const setIssueRank = (id, meta) => (universalActionCreator(types.SET_ISSUE_RANK, id, meta));

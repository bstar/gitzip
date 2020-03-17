import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchUserDetails, fetchUserRepos, fetchUserRepoIssues } from '../api';

import {
    getUserSuccess,
    getUserReposSuccess,
    getUserRepoIssuesSuccess,
} from '../actions';


function* getUserDataSaga (action) {

    const { data } = yield call(fetchUserDetails, { key: action.payload }, action.payload.query);

    yield put(getUserSuccess(data));
}

function* getUserReposSaga (action) {

    const { user } = yield select();
    const { data } = yield call(fetchUserRepos, { key: user.key }, action.payload.query);

    yield put(getUserReposSuccess(data));
}

function* getUserRepoIssuesSaga (action) {

    const { user } = yield select();
    const { data } = yield call(fetchUserRepoIssues, { repoName: action.payload.name, key: user.key }, action.payload.query);

    yield put(getUserRepoIssuesSuccess(data));
}


export default function* allUserSagas () {
    yield all([
        takeLatest(types.SET_GITHUB_KEY, getUserDataSaga),
        takeLatest(types.GET_USER_SUCCESS, getUserReposSaga),
        takeLatest(types.SET_ACTIVE_REPO, getUserRepoIssuesSaga),
    ]);
}

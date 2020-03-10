import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchUserDetails, fetchUserRepos } from '../api';

import {
    getUserSuccess,
    getUserReposSuccess,
} from '../actions';


function* getUserDataSaga (action) {

    const { data } = yield call(fetchUserDetails, action.payload, action.payload.query);

    yield put(getUserSuccess(data));
};

function* getUserReposSaga (action) {

    const { user } = yield select();
    const { data } = yield call(fetchUserRepos, user.key, action.payload.query);

    yield put(getUserReposSuccess(data));
};

export default function* allUserSagas () {
    yield all([
        takeLatest(types.SET_GITHUB_KEY, getUserDataSaga),
        takeLatest(types.GET_USER_SUCCESS, getUserReposSaga),
    ]);
};

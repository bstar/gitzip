import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchUser } from '../api';

import {
    getUserSuccess,
} from '../actions';


function* getUserDataSaga (action) {

    const { data } = yield call(fetchUser, action.payload, action.payload.query);

    yield put(getUserSuccess(data));
}

export default function* allUserSagas () {
    yield all([
        takeLatest(types.SET_GITHUB_KEY, getUserDataSaga),
    ]);
};

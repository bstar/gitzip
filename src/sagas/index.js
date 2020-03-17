import { all, fork } from 'redux-saga/effects';

import User from './user';


export default function* root () {
    yield all([
        fork(User),
    ]);
}

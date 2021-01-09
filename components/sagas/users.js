import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/action';
import * as api from '../api/users';

import {
    GET_USERS_REQUEST
} from '../types';

export function* getUsers() {
    try{
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items: result
        }));
    } catch(e) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;

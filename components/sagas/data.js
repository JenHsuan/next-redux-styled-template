import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/action';
import * as api from '../api/data';

//Types
import {
    GET_DATA_REQUEST
} from '../types';

export function* getData() {
    try{
        const result = yield call(api.getData);
        yield put(actions.getDataSuccess({
            items: result
        }));
    } catch(e) {

    }
}

function* watchGetDataRequest() {
    yield takeEvery(GET_DATA_REQUEST, getData);
}

const dataSagas = [
    fork(watchGetDataRequest)
];

export default dataSagas;

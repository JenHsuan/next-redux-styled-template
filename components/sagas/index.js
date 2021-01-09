import usersSagas from './users';
import dataSagas from './data';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...usersSagas,
        ...dataSagas
    ])
}

import { ThunkAction } from 'redux-thunk'

//Types
import {
    GET_USERS,
    GET_DATA
} from '../types';

//States
import {
    InitialState
} from '../states/states';

export interface GetDataAction {
    type: typeof GET_DATA,
    payload: {
        data: string
    }
}

export interface GetUsersAction {
    type: typeof GET_USERS,
    payload: {
        users: any[]
    }
}

//The example for a synchronous action
export const getData = (): ThunkAction<void, InitialState, unknown, GetDataAction> => dispatch => {
    try {
        dispatch({
            type: GET_DATA,
            payload: {data: 'Test component'}
        });
    } catch (error) {
        console.log(error);
    }
};

//The example for an asynchronous action
//rem api: https://rem-rest-api.herokuapp.com/
//fetch api: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const getUsers = (): ThunkAction<void, InitialState, unknown, GetUsersAction> => async dispatch => {
    try {
        let url = 'http://rem-rest-api.herokuapp.com/api/users';
        let res = await fetch(url)
        let data = await res.json()
        dispatch({
            type: GET_USERS,
            payload: {users: data.data}
        });
    } catch (error) {
        console.log(error);
    }
};

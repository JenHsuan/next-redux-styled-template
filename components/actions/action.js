//Types
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS
} from '../types';

//Actions

//The example for a synchronous action
export const getDataRequest = () => ({
    type: GET_DATA_REQUEST,
});

export const getDataSuccess = ({items}) => ({
    type: GET_DATA_SUCCESS,
    payload: {
        items
    }
});

//The example for an asynchronous action
//rem api: https://rem-rest-api.herokuapp.com/
//fetch api: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const getUsersRequest = () => ({
    type: GET_USERS_REQUEST
});

export const getUsersSuccess = ({items}) => ({
    type: GET_USERS_SUCCESS,
    payload: {
        items
    }
});

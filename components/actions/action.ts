//Types
import {
    GET_MOCKED_USERS,
    GET_MOCKED_DATA
} from '../types';

//Actions

//The example for a synchronous action
export const getMockedData = () => dispatch => {
    try {
        dispatch({
            type: GET_MOCKED_DATA,
            payload: {mockedData: 'Test component'}
        });
    } catch (error) {
        console.log(error);
    }
};

//The example for an asynchronous action
//rem api: https://rem-rest-api.herokuapp.com/
//fetch api: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const getMockedUsers = () => async dispatch => {
    try {
        let url = 'http://rem-rest-api.herokuapp.com/api/users';
        let res = await fetch(url)
        let data = await res.json()
        dispatch({
            type: GET_MOCKED_USERS,
            payload: {mockedUsers: data.data}
        });
    } catch (error) {
        console.log(error);
    }
};

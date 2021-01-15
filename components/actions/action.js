//Types
import {
    GET_USERS,
    GET_DATA
} from '../types';

const url = 'http://rem-rest-api.herokuapp.com/api/users';

//Actions

//The example for a synchronous action
export const getData = () => ({
    type: GET_DATA,
    payload: new Promise(resolve => resolve({data: 'Test component'}))
});

//The example for an asynchronous action
//rem api: https://rem-rest-api.herokuapp.com/
//fetch api: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
export const getUsers = () => ({
    type: GET_USERS,
    payload: fetch(url).then(res => res.json())
});
/*
async dispatch => {
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

*/

//Types
import {
    GET_DATA
} from '../types';

//Actions
export const getData = () => dispatch => {
    try {
        /*
        let url = ``;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_DATA,
                payload: res
            });
            
        });
        */
       dispatch({
            type: GET_DATA,
            payload: {data: 'Test component'}
        });
    } catch (error) {
        console.log(error);
    }
};
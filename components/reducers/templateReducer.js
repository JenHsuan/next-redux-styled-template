//Types
import {
    GET_DATA
} from '../types';

//States
import {
    initialState,
} from '../states/states';

//Reducer
export const templateReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
             return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
};
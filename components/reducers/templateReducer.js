//Types
import {
    GET_USERS_SUCCESS,
    GET_DATA_SUCCESS
} from '../types';

//States
import {
    initialState,
} from '../states/states';

//Reducer
export const templateReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_SUCCESS:
            return {
               ...state,
               users: action.payload.items
           };
        case GET_DATA_SUCCESS:
             return {
                ...state,
                data: action.payload.items
            };
        default:
            return state;
    }
};

import { HYDRATE } from 'next-redux-wrapper';

//Types
import {
    GET_DATA_PENDING,
    GET_DATA_FULFILLED,
    GET_USERS_PENDING,
    GET_USERS_FULFILLED
} from '../types';

//States
import {
    initialState,
} from '../states/states';

//Reducer
export const templateReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {
                ...state,
                data: action.payload.templateReducer.data,
                users: action.payload.templateReducer.users
            }
        case GET_USERS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case GET_USERS_FULFILLED:
             return {
                ...state,
                users: action.payload.data,
                isPending: false
            };
        case GET_DATA_PENDING:
             return {
                ...state
            };
        case GET_DATA_FULFILLED:
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
};

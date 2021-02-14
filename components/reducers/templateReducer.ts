//Types
import {
    GET_USERS,
    GET_DATA
} from '../types';

//States
import {
    initialState,
    InitialState
} from '../states/states';

//Reducer
interface TemplateReducer {

}

import {
    GetDataAction,
    GetUsersAction
} from '../actions/action';

export const templateReducer = (
    state: InitialState = initialState,
    action: GetDataAction | GetUsersAction
) => {
    switch(action.type) {
        case GET_USERS:
             return {
                ...state,
                users: action.payload.users
            };
        case GET_DATA:
             return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
};

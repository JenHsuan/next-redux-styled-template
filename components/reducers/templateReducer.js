//Types
import {
    GET_MOCKED_USERS,
    GET_MOCKED_DATA
} from '../types';

//States
import {
    initialState,
} from '../states/states';

//Reducer
export const templateReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOCKED_USERS:
             return {
                ...state,
                mockedUsers: action.payload.mockedUsers
            };
        case GET_MOCKED_DATA:
             return {
                ...state,
                mockedData: action.payload.mockedData
            };
        default:
            return state;
    }
};

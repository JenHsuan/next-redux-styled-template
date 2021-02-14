import { RootReducer } from '../reducers';

//Initial states
export const initialState = {
    users:[],
    data: ''
};

// interfaces
export interface InitialState {
    users: any[],
    data: string
}

//Selector functions
export const selectData = (rootState: RootReducer) => rootState.templateReducer.data;
export const selectUsers = (rootState: RootReducer) => rootState.templateReducer.users;


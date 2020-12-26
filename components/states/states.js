//Initial states
export const initialState = {
    mockedUsers:[],
    mockedData: ''
};

//Selector functions
export const selectMockedData = rootState => rootState.templateReducer.mockedData;
export const selectMockedUsers = rootState => rootState.templateReducer.mockedUsers;

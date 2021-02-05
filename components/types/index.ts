import { Action } from 'redux';

export const GET_MOCKED_DATA = 'GET_MOCKED_DATA';
export const GET_MOCKED_USERS = 'GET_MOCKED_USERS';

export type GetMockedDataAction = Action<typeof GET_MOCKED_DATA>;
export type GetMockedUsersAction = Action<typeof GET_MOCKED_USERS>;

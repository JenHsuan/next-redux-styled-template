import React, { cloneElement } from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

//actions
import {
    getUsers,
    getData
} from "../../../components/actions/action";

//types
import {
  GET_USERS,
  GET_DATA
} from '../../../components/types';

//reducers
import { templateReducer } from '../../../components/reducers/templateReducer';

global.fetch = require('node-fetch');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Redux', () => {
    let store;
    let mockedData;
    let mockedUsers;
    beforeEach(() => {
      store = mockStore({
        mockUsers:[],
        mockedData: ''
      });

      mockedData = 'Test component';
      mockedUsers = [
        {
          "id": 1,
          "firstName": "Peter",
          "lastName": "Mackenzie"
        },
        {
          "id": 2,
          "firstName": "Cindy",
          "lastName": "Zhang"
        },
        {
          "id": 3,
          "firstName": "Ted",
          "lastName": "Smith"
        },
        {
          "id": 4,
          "firstName": "Susan",
          "lastName": "Fernbrook"
        },
        {
          "id": 5,
          "firstName": "Emily",
          "lastName": "Kim"
        },
        {
          "id": 6,
          "firstName": "Peter",
          "lastName": "Zhang"
        },
        {
          "id": 7,
          "firstName": "Cindy",
          "lastName": "Smith"
        },
        {
          "id": 8,
          "firstName": "Ted",
          "lastName": "Fernbrook"
        },
        {
          "id": 9,
          "firstName": "Susan",
          "lastName": "Kim"
        },
        {
          "id": 10,
          "firstName": "Emily",
          "lastName": "Mackenzie"
        }
      ];
    });


    test('Test reducers: templateReducer', () => {
        //initial states
        let initialData = {
            users:[],
            data: ''
        };
        expect(templateReducer(undefined, {})).toEqual(initialData);

        //getMockedData
        let data = {
            users:[],
            data: mockedData
        };
        templateReducer(initialData, getData(res => {
            expect(res).toEqual(data)
        }))

        //getMockedUsers
        data = {
            users: mockedUsers,
            data: ''
        };
        templateReducer(initialData, getUsers(res => {
            expect(res).toEqual(data)
        }))

    });

    test('Test actions', async() => {
        //getMockedData
        let data = {
            type: GET_DATA,
            payload: {data: mockedData}
          };

        getData()(res => expect(res).toEqual(data));

        //getMockedUsers
        let res = {
            type: GET_USERS,
            payload: { users:  mockedUsers}
        };
        return store.dispatch(getUsers()).then(() => {
            expect(store.getActions()[0]).toEqual(res)
        })
    });

  });


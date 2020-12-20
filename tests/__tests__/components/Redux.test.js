import React, { cloneElement } from 'react';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';

//actions
import {
    getUsers,
    getData
} from "../../../components/actions/action";

//types
import {
  GET_USERS_FULFILLED,
  GET_USERS_PENDING,
  GET_DATA_FULFILLED,
  GET_DATA_PENDING
} from '../../../components/types';

//reducers
import { templateReducer } from '../../../components/reducers/templateReducer';

global.fetch = require('node-fetch');

const middlewares = [promiseMiddleware];
const mockStore = configureStore(middlewares);

describe('Redux', () => {
    let store;
    let mockedData;
    let mockedUsers;
    beforeEach(() => {
      store = mockStore({
        mockUsers:[],
        mockedData: '',
        isPending: true
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
            data: '',
            isPending: true
        };
        expect(templateReducer(undefined, {})).toEqual(initialData);

        //getMockedData

        //pending
        let data = {
          users:[],
          data: '',
          isPending: true
        };
        expect(templateReducer(initialData, {
          type: GET_DATA_PENDING,
          payload: { data: '' }}
          ))
        .toEqual(data)

        //fullfilled
        data = {
            users:[],
            data: mockedData,
            isPending: true
        };
        expect(templateReducer(initialData, {
          type: GET_DATA_FULFILLED,
          payload: { data: mockedData }}
        ))
        .toEqual(data)

        //getMockedUsers

        //pending
        data = {
          users:[],
          data: '',
          isPending: true
        };
        expect(templateReducer(initialData, {
          type: GET_USERS_PENDING,
          payload: { data:[] }}
          ))
        .toEqual(data)

        //fullfilled
        data = {
            users: mockedUsers,
            data: '',
            isPending: false
        };

        expect(templateReducer(initialData, {
          type: GET_USERS_FULFILLED,
          payload: { data: mockedUsers }}
        ))
        .toEqual(data)
    });

    test('Test actions', async() => {
        //getMockedData
        let res = await store.dispatch(getData());
        expect(res.value.data).toEqual(mockedData);

        //getMockedUsers
        res = await store.dispatch(getUsers());
        expect(res.value.data).toEqual(mockedUsers);
    });

  });


import React, { cloneElement } from 'react';
import createSagaMiddleware from "redux-saga";
import configureStore from 'redux-mock-store';

//actions
import {
    getDataRequest,
    getDataSuccess,
    getUsersRequest,
    getUsersSuccess
} from "../../../components/actions/action";

//types
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from '../../../components/types';

//reducers
import { templateReducer } from '../../../components/reducers/templateReducer';

global.fetch = require('node-fetch');

const middleware = createSagaMiddleware();
const mockStore = configureStore([middleware]);

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
        templateReducer(initialData, getDataRequest(res => {
            expect(res).toEqual(data)
        }))

        //getMockedUsers
        data = {
            users: mockedUsers,
            data: ''
        };
        templateReducer(initialData, getUsersRequest(res => {
            expect(res).toEqual(data)
        }))

    });

    test('Test actions', async() => {
        //getDataRequest
        let data = {
            type: GET_DATA_REQUEST
        };
        let res = getDataRequest();
        console.log(res);
        expect(res).toEqual(data);

        //getUsersRequest
        data = {
            type: GET_USERS_REQUEST
        };
        res = getUsersRequest();
        console.log(res);
        expect(res).toEqual(data);
    });

  });


import { call } from 'redux-saga/effects'
import { getUsers as apiGetUsers } from '../../../components/api/users';
import { getUsers as sagaGetUsers } from '../../../components/sagas/users';
import { getData as apiGetData } from '../../../components/api/data';
import { getData as sagaGetData } from '../../../components/sagas/data';

describe('React-saga tests', () => {
    it('should get mocked users correctly', async() => {
      const gen = sagaGetUsers()
      expect(gen.next().value).toEqual(call(apiGetUsers));
    });

    it('should get mocked data correctly', async() => {
      const gen = sagaGetData()
      expect(gen.next().value).toEqual(call(apiGetData));
    });
  });



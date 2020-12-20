import { call } from 'redux-saga/effects'
import { getMockedUsers as apiGetMockedUsers } from '../components/api/mockedUsers';
import { getMockedUsers as sagaGetMockedUsers } from '../components/sagas/mockedUsers';
import { getMockedData as apiGetMockedData } from '../components/api/mockedData';
import { getMockedData as sagaGetMockedData } from '../components/sagas/mockedData';

describe('React-saga tests', () => {
    it('should get mocked users correctly', async() => {
      const gen = sagaGetMockedUsers()
      expect(gen.next().value).toEqual(call(apiGetMockedUsers));
    });

    it('should get mocked data correctly', async() => {
      const gen = sagaGetMockedData()
      expect(gen.next().value).toEqual(call(apiGetMockedData));
    });
  });



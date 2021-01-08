import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

import ReduxTester from '../../../components/ReduxTester';

const middleware = createSagaMiddleware();
const mockStore = configureStore([middleware]);

describe('Components snapshots', () => {
    let store;
    let component;
    beforeEach(() => {
      store = mockStore({
        mockedUsers:['test'],
        mockedData: 'test'
      });

      component = shallow(
          <Provider store={store}>
            <ReduxTester />
          </Provider>
        );
    });

    test('should render with given state from Redux store', () => {
      expect(component).toMatchSnapshot();
    });
  });

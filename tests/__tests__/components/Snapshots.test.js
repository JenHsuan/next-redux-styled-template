import React, { cloneElement } from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import ReduxTester from '../../../components/ReduxTester';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

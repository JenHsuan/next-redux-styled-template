import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReduxTester from '../../../components/ReduxTester';

const mockStore = configureStore([]);

describe('Component: ReduxTester', () => {
    let store;
    let component;
    beforeEach(() => {
      store = mockStore({
        myState: 'sample text',
      });
  
      component = shallow(
          <Provider store={store}>
            <ReduxTester />
          </Provider>
        );
    });
  
    it('should render with given state from Redux store', () => {
      expect(component).toMatchSnapshot();
    });
  
  });
import React from "react";
import { Provider } from "react-redux";
import ReduxTester from "../../../components/ReduxTester";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../../../components/reducers';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//actions
import {
  getData
} from "../../../components/actions/action";

function renderWithProviders(ui, store) {
  return render(<Provider store={store}>{ui}</Provider>);
}

function getStore(initialState = {}) {
  const middleware = [promiseMiddleware];
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}


describe('Component: ReduxTester', () => {
  test('should render with given state from Redux store', async() => {
    let mockedData = 'Test component';
    let store = getStore();
    await store.dispatch(getData());
    const { getByTestId } = renderWithProviders(<ReduxTester />, store)
    expect(getByTestId("text-content")).toHaveTextContent(mockedData)
  });
});

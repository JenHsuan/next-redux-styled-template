import React from "react";
import { Provider } from "react-redux";
import ReduxTester from "../../../components/ReduxTester";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from '../../../components/reducers';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function renderWithProviders(ui, initialState = {}) {
  const middleware = [thunk];
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return render(<Provider store={store}>{ui}</Provider>);
}


describe('Component: ReduxTester', () => {
  test('should render with given state from Redux store', () => {
    let mockedData = 'Test component';
    const { getByTestId } = renderWithProviders(<ReduxTester />)
    expect(getByTestId("text-content")).toHaveTextContent(mockedData)
  });
});

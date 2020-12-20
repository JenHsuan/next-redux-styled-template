import React from 'react';
import { shallow } from 'enzyme';
import index from '../../pages/index';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<index/>);

    expect(component).toMatchSnapshot();
  });
});

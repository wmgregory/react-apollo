import React from 'react';

import { shallow } from 'enzyme';

import { App } from './App';

jest.mock('../services/client');

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

import React from 'react';

import { shallow } from 'enzyme';

import * as client from '../services/client';
import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(client, 'client').mockReturnValue({});
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

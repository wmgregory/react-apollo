import React from 'react';

import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Header', () => {
  it('should render heading', () => {
    const wrapper = shallow(<Header title='New Title' />);

    expect(wrapper).toBeDefined();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

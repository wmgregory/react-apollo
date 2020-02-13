import React from 'react';
import { QueryResult } from '@apollo/react-common';
import * as hooks from '@apollo/react-hooks';

import { shallow } from 'enzyme';

import { RandomNumber } from './RandomNumber';

describe('RandomNumber', () => {
  const mockQuery = { loading: false, error: false, data: { rand: 2 } };

  beforeEach(() => {
    jest.spyOn(hooks, 'useQuery').mockReturnValue((mockQuery as unknown) as QueryResult);
  });
  it('should render with random number', () => {
    const wrapper = shallow(<RandomNumber />);

    expect(wrapper).toBeDefined();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});

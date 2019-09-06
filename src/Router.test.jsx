import React from 'react';
import { shallow } from 'enzyme';
import Router from './Router';

describe('Router', () => {
  const createTestComponent = () => shallow(<Router />);

  it('renders without crashing', () => {
    createTestComponent();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import createRouterContext from 'react-router-test-context';
import App from 'App';

it('renders without crashing', () => {
  const context = createRouterContext();
  const wrapper = shallow(<App />, { context });
  expect(wrapper.find('div.App')).toHaveLength(1);
});

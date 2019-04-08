import React from 'react';
import {shallow} from 'enzyme';
import App from '../client/src/components/App.jsx';

it('Contains Header component', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.text()).toEqual("<Header />")
});



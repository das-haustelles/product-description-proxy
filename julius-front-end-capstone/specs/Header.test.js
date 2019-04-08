import React from 'react';
import {shallow} from 'enzyme';
import Header from '../client/src/components/Header.jsx';

it('Contains text "HOSTELWORLD"', () => {
  const wrapper = shallow(<Header/>);
  expect(wrapper.text()).toEqual("HOSTELWORLD")
});
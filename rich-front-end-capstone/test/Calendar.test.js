import Calendar from '../client/src/components/Calendar';
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import moment from 'moment';

describe('Calendar component', () => {
  test('should shallow correctly', () => {
      const component = shallow(<Calendar />);
      expect(component).toMatchSnapshot(); 
  })
  test('should mount correctly', () => {
    const component = mount(<Calendar />);
    expect(component).toMatchSnapshot();  
  })
  test('should have month state property', () => {
    const component = mount(<Calendar />);
    const currentMonth = moment().month();
    expect(component.state('month')).toBe(currentMonth);  
  })
  test('should have year state property', () => {
    const component = mount(<Calendar />);
    const currentYear = moment().year();
    expect(component.state('year')).toBe(currentYear);  
  })
  test('should have dates state property with 6 weeks of dates', () => {
    const component = mount(<Calendar />);
    expect(component.state('dates').length).toBe(6);  
  })
})
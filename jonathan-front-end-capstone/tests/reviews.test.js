import React from 'react';
import {
  shallow,
} from 'enzyme';

// Components
import Reviews from '../client/components/Reviews';

describe('Test functionality of this sample component', () => {
  it('The MiniSummaryRating Component exists', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists()).toBe(true);
  });
});

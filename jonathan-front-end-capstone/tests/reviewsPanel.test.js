import React from 'react';
import {
  shallow,
} from 'enzyme';

import ReviewsPanel from '../client/components/ReviewsPanel';

describe('Functionality of ReviewsPanel component', () => {
  it('The word Fabulous exists', () => {
    const wrapper = shallow(<ReviewsPanel />);
    expect(wrapper.find('#summary-keyword').text()).toBe('Fabulous');
  });
});

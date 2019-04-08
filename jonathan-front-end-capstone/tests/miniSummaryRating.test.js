import React from 'react';
import {
  shallow,
} from 'enzyme';

// Components
import Reviews from '../client/components/Reviews';
import MiniSummaryRating from '../client/components/MiniSummaryRating';

describe('Functionality of MiniSummaryRating component', () => {
  it('A ms-rating-summary container exists', () => {
    const wrapper = shallow(<MiniSummaryRating />);
    expect(wrapper.find('.ms-rating-summary').length).toBe(1);
  });

  it('A ratings-factors UL list exists', () => {
    const wrapper = shallow(<MiniSummaryRating />);
    expect(wrapper.find('.rating-factors').length).toBe(1);
  });
});

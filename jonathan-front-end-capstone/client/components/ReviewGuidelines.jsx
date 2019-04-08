import React from 'react';
import styled from 'styled-components';

const ReviewGuidelinesParagraph = styled.p`
  margin: 0 auto;
  font-size: .8rem;
  line-height: 1.2rem;
  font-family: inherit;
  font-weight: 400;
  padding: 0;
`;

const ReviewGuidelinesLink = styled.a`
  text-decoration: none;
  color: #ff6a3a;
  font-size: .8rem;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  cursor: pointer;
`;

function ReviewGuidelines() {
  return (
    <div className="row-container">
      <div className="small-12 columns">
        <div className="intro">
          <ReviewGuidelinesParagraph>The rating percentage % is calculated from customers who booked within the last 6 months. All ratings and reviews are based on the feedback and opinions of the customers who submitted them and do not express the opinions of Hostelworld.com. This way, you get an up-to-the-minute opinion of just how good a hostel really is. </ReviewGuidelinesParagraph>
          <ReviewGuidelinesLink href="https://www.hostelworld.com/reviewguidelines" target="_blank" rel="noopener noreferrer"> Read our review guidelines</ReviewGuidelinesLink>
        </div>
      </div>
    </div>
  );
}

export default ReviewGuidelines;

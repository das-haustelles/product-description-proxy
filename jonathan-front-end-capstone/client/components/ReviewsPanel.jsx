import React from 'react';
import styled from 'styled-components';

import ReviewGuidelines from './ReviewGuidelines';
import RatingSummaryBreakdown from './RatingSummaryBreakdown';
import DropdownFilters from './DropdownFilters';
import UserReviewsComponent from './UserReviews';
import PaginationComponent from './PaginationComponent';


const EntireSection = styled.section`
  width: 50%;
  background-color: #fff;
`;

const SidePanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const XDiv = styled.div`
  font-family: Noto,Helvetica,Arial,sans-serif;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  color: #888;
`;

const Header2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  color: #444;
  margin-top: 0;
  margin-bottom: .5rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  font-family: "Noto",Helvetica,Arial,sans-serif;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const SidePanelContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

class ReviewsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this.handleCurrentPageChange = this.handleCurrentPageChange.bind(this);
  }

  handleCurrentPageChange(e) {
    e.preventDefault();
    console.log('page change clicked:', e.currentTarget.textContent);
    this.setState({
      currentPage: e.currentTarget.textContent,
    });
  }

  render() {
    const { currentPage } = this.state;
    return (
      <EntireSection>
        <SidePanelHeader>
          <Header2>Reviews & Ratings SIR!!!</Header2>
          <XDiv>x</XDiv>
        </SidePanelHeader>


        <div className="slide-panel-content">
          <div className="slide-panel-content-wrapper" />
          <SidePanelContentSection>
            <div className="reviews-overlay-content">

              <ReviewGuidelines />
              <RatingSummaryBreakdown />
              <DropdownFilters />
              <br />
              <br />
              <br />
              <br />
              <UserReviewsComponent />
              <PaginationComponent currentPage={currentPage} handleClickReviewsPanel={this.handleCurrentPageChange} />

            </div>
          </SidePanelContentSection>

        </div>
      </EntireSection>

    );
  }
}

export default ReviewsPanel;

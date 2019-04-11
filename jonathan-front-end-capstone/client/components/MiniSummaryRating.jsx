import React from 'react';
import styled from 'styled-components';
import { Comment } from 'styled-icons/fa-regular';
import { LocationOn } from 'styled-icons/material';
import { Person } from 'styled-icons/octicons';
import { MagicWand } from 'styled-icons/icomoon';

const MSRating = styled.section`
  background-color: '#f4f4f4'
`;

const MSRatingSummaryBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ff7547;
  padding: .5rem;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  border-radius: .188rem;
  color: #fff;
  float: left;
  line-height: 1;
  min-width: 3.4rem;
  display: flex;
  box-sizing: border-box;
  font-family: Helvetica,Arial,sans-serif;
  padding: .5rem;
  margin-top: 25px;
`;

const infoStyle = {
  marginLeft: '.5rem',
  flexGrow: '1',
  flexShrink: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '0',
  padding: '.5rem',

};

const Paragraph = styled.p`
  color: #ff7547;
  font-size: 1rem;
  font-weight: 700;
`;

const ReviewLink = styled.span`
  margin-left: .2rem;
  flex-grow: 0;
  line-height: 1rem;
  font-size: .65rem;
  color: #ff6a3a;
  cursor: pointer;
  text-decoration: none;
`;

const SummaryList = styled.span`
  font-family: "Noto",Helvetica,Arial,sans-serif;
  margin-left: .5rem;
  font-size: .9rem;
  line-height: 1.6;
  color: #333;
  cursor: auto;
`;

const ReadAllReviewsLink = styled.a`
  color: #ff7547;
  text-decoration: none;
  font-size: .8rem;
  font-family: "Noto",Helvetica,Arial,sans-serif;
`;


function MiniSummaryRating() {
  return (
    <MSRating>

      <MSRatingSummaryBlock>
        <div className="ms-rating-summary">
          <Score> 8.8 </Score>
          <div className="info" style={infoStyle}>
            <Paragraph>Fabulous</Paragraph>
            <div>
              <Comment size="10" color="#ff6a3a" />
              <ReviewLink>2870 Total Reviews</ReviewLink>
            </div>
          </div>
        </div>
      </MSRatingSummaryBlock>
      <div />

      <ul className="rating-factors" />
      <li style={{ listStyle: 'none' }}>
        <LocationOn size="23" color="#fd5951" />
        <SummaryList>
          Perfect
          <b> Location</b>
        </SummaryList>
      </li>

      <li style={{ listStyle: 'none' }}>
        <Person size="23" color="#00c08a" />
        <SummaryList>
          Marvelous
          <b> Staff</b>
        </SummaryList>
      </li>

      <li style={{ listStyle: 'none' }}>
        <MagicWand size="23" color="#00d4f9" />
        <SummaryList>
          Excellent
          <b> Cleanliness</b>
        </SummaryList>
      </li>
      <ul style={{
        boxSizing: 'border-box',
        borderBottomcolor: 'rgb(204, 204, 204)',
        borderBottomWidth: '1px',
        borderBottomStyle: 'dotted',
      }}
      />

      <ReadAllReviewsLink> Read all reviews </ReadAllReviewsLink>
    </MSRating>
  );
}

export default MiniSummaryRating;

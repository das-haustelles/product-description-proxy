import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const HeaderDisplay = styled.h2`
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Span = styled.span`
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  text-align: center;
  &:hover {
    color: #ff7547;
    cursor: pointer;
  }
`;

const Header = ({ currentMonth, currentYear, handleNext, handlePrev }) => {
  const monthDisplay = moment().month(currentMonth).format('MMMM');
  const banner = `${monthDisplay} ${currentYear}`;
  return (
    <Div>
      <Span onClick={e => handlePrev(e)}> 
        <i className="fas fa-chevron-left"></i> 
      </Span>
      <span>
        <HeaderDisplay>{banner}</HeaderDisplay>
      </span>
      <Span onClick={e => handleNext(e)}>
        <i className="fas fa-chevron-right"></i>
      </Span>
    </Div>
  );
};

export default Header;

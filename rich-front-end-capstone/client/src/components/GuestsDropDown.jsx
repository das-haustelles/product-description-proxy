import React from 'react';
import styled from 'styled-components';

const InputLabels = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  line-height: 12px;
  color: #666666;
  margin-bottom: .5rem;
  
`;
const Select = styled.select`
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  background-color: #fff;
  border: 1px solid #bbb;
  color: #666;
  font-size: .8rem;
  background-position-x: 100%;
  border-radius: 3px;
  width: 100%;
  height: 37px;
`;

const GuestsDropDown = ({ handleNumberOfGuests }) => {
  const options = [];
  for (let i = 2; i <= 80; i += 1) {
    options.push(i);
  }
  return (
    <React.Fragment>
      <InputLabels>GUESTS</InputLabels>
        <Select onChange={(e) => handleNumberOfGuests(e)}>
          <option value="1">1 Guest</option>
          {options.map((option) => (
            <option value={option}>{option} Guests</option>
          ))}
        </Select>
    </React.Fragment>
  );
};

export default GuestsDropDown;
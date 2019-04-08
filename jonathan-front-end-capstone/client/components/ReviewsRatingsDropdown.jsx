import React from 'react';
import styled from 'styled-components';

const DropdownFilter = styled.div`
  position: relative;
  float: left;
  width: 50%;
  padding-left: .9375rem;
  padding-right: .9375rem;
`;

const FormLabel = styled.label`
  color: #666;
  margin-bottom: .5rem;
  display: block;
  text-transform: uppercase;
  font-size: .65rem;
  font-weight: 700;
`;

const DropdownSelect = styled.select`
  background-color: #fff;
  padding: .5rem;
  color: #666;
  font-size: .8rem;
  width: 100%;
  :hover {
    border-color: #999;
  };
`;

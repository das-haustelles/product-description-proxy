import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  padding: 10px 20px;
  margin: .125rem;
  border: .0625rem solid #ccc;
  background-color: #fff;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  border-radius: .1875rem;
  &:hover {
    border: .0625rem solid #ff7547;
    color: #ff7547;
    cursor: pointer;
  }
`;

const List = styled.li`
  height: 37px;
  font-family: "'Noto Sans'",Helvetica,Arial,sans-serif;
  list-style: none;
  width: 20%;
`;
const Input = styled.input`
  position: absolute;
  visibility: hidden;
  width: 100%;
`;
const FormFields = styled.div`
  width: 50%;
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: centered;
`;
const Labels = styled.span`
  font-size: 12px;
  font-weight: bold;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  line-height: 12px;
  color: #666666;
  width: 100%;
  margin: 8px 0;
`;
const Ul = styled.ul`
  width: 100%;
  padding: 0 1rem 0 0;
  margin: 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const Select = styled.select`
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
const GroupForm = () => {
  const options = [
    'Holiday with Friends',
    'Junior / Primary School',
    'High / Secondary School',
    'College / University',
    'Business Trip',
    'Stag/Hen/Bachelor Party',
    'Sports Group',
    'Cultural Group',
  ];
  const ages = ['0-12', '12-18', '18-21', '21-35', '35-50', '50+'];
  return (
    <Section>
      <FormFields>
        <Labels>GROUP TYPE</Labels>
        <Select>
          <option>Group Type</option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </Select>
      </FormFields>
      <FormFields>
        <Labels>AGE RANGES</Labels>
        <Ul className="age-ranges-list">
          {ages.map((age) =>(
            <List>
              <Input id={"58-age-ranges-" + ages.indexOf(age)} type="checkbox" value={age}></Input>
              <Label htmlFor={"58-age-ranges-" + ages.indexOf(age)}>{age}</Label>
            </List>
          ))}
        </Ul>
      </FormFields>
    </Section>
  )
}

export default GroupForm;
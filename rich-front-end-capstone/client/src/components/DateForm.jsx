import React from 'react';
import styled from 'styled-components';
import GroupForm from './GroupForm';
import GuestsDropDown from './GuestsDropDown';
import Calendar from './Calendar';
import CheckInField from './CheckInField';
import CheckOutField from './CheckOutField';

const SearchButton = styled.button`
  background: #ff7547;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 3px;
  height: 37px;
  width: 100%;
  margin-top: 8px;
`;
const FormFields = styled.div`
  width: 25%;
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  width: auto;
`;

class DateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
    };
    this.handleNumberOfGuests = this.handleNumberOfGuests.bind(this);
  }

  handleNumberOfGuests(e) {
    this.setState({ guests: e.target.value });
  }

  render() {
    const { guests } = this.state;
    const {
      checkIn, checkOut, bookedDates, handleNewDate, handleCheckInClick, handleCheckOutClick, displayCheckInCalendar, displayCheckOutCalendar,
    } = this.props;
    const isLargeParty = guests >= 9;
    return (
      <div>
        <Form>
          <FormFields>
            <CheckInField
              checkIn={checkIn}
              handleCheckInClick={handleCheckInClick} />
            {displayCheckInCalendar ? <Calendar bookedDates={bookedDates} handleNewDate={handleNewDate} checkIn={checkIn} /> : <React.Fragment></React.Fragment>}
          </FormFields>
          <FormFields>
            <CheckOutField
              checkOut={checkOut}
              handleCheckOutClick={handleCheckOutClick} />
            {displayCheckOutCalendar ? <Calendar bookedDates={bookedDates} handleNewDate={handleNewDate} checkIn={checkIn} /> : <React.Fragment></React.Fragment>}
          </FormFields>
          <FormFields>
            <GuestsDropDown handleNumberOfGuests={this.handleNumberOfGuests} />
          </FormFields>
          <FormFields>
            <span></span>
            <SearchButton type="submit">Search</SearchButton>
          </FormFields>
        </Form>
        {isLargeParty ? <GroupForm /> : <React.Fragment></React.Fragment>}
      </div>
    );
  }
}
export default DateForm;

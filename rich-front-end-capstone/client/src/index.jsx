import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import DateForm from './components/DateForm';

const Availability = styled.section`
  background-color: #f4f4f4;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;
`;
const Header = styled.h2`
  font-size: 22px;
  font-family: 'Noto Sans',Helvetica,Arial,sans-serif;
  font-weight: 400;
  line-height: 32px;
  color: #444444;
  text-align: start;
`;
const DateRange = styled.div`
  color: #333333;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 19px;
  text-align: start;
  padding-left: 8px;
`;

const Change = styled.a`
  margin-left: .25rem;  
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #ff7547;
  padding-left: 8px;
  &:hover {
    color: #ff4000;
    cursor: pointer;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  
`;
const Span = styled.span`
  padding-left: 8px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: moment(),
      checkOutDate: moment().add(3, 'days'),
      newReservation: false,
      bookedDates: [],
      displayCheckInCalendar: false,
      displayCheckOutCalendar: false,
    };
    this.handleNewDate = this.handleNewDate.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
  }

  componentDidMount() {
    const hostelID = window.location.pathname.split('/')[2];
    axios.get(`/api/hostels/${hostelID}`)
      .then((response) => {
        const checkInDate = moment(response.data.checkInDate);
        const checkOutDate = moment(response.data.checkOutDate);
        this.setState({
          checkInDate,
          checkOutDate,
        });
      });
    axios.get(`/hostels/${hostelID}/bookings`)
      .then((response) => {
        const dates = response.data;
        const bookedDates = dates.map(date => moment(date));
        this.setState({
          bookedDates,
        });
      });
  }

  handleNewReservation() {
    this.setState({ newReservation: true });
  }

  handleNewDate(date) {
    const newDate = moment(date);
    this.setState({
      checkInDate: newDate,
      checkOutDate: moment(newDate).add(1, 'days'),
      displayCheckInCalendar: false,
      displayCheckOutCalendar: false,
    });
  }

  handleCheckInClick() {
    this.setState({
      displayCheckInCalendar: true,
      displayCheckOutCalendar: false,
    });
  }

  handleCheckOutClick() {
    this.setState({
      displayCheckInCalendar: false,
      displayCheckOutCalendar: true,
    });
  }

  renderSummary() {
    const { checkInDate, checkOutDate } = this.state;
    const checkIn = checkInDate.format('ddd D MMM YYYY');
    const checkOut = checkOutDate.format('ddd D MMM YYYY');
    return (
      <Div>
        <div>
          <DateRange>
            <i className="fas fa-calendar-alt" />
            <Span>{`${checkIn} - ${checkOut}`}</Span>
          </DateRange>
        </div>
        <Change>
          <i className="fas fa-search" />
          <Span onClick={() => this.handleNewReservation()}>Change</Span>
        </Change>
      </Div>
    );
  }

  renderForm() {
    const {
      checkInDate, checkOutDate, bookedDates, displayCheckInCalendar, displayCheckOutCalendar,
    } = this.state;
    return (
      <div>
        <DateForm
          checkIn={checkInDate}
          checkOut={checkOutDate}
          bookedDates={bookedDates}
          handleNewDate={this.handleNewDate}
          displayCheckInCalendar={displayCheckInCalendar}
          displayCheckOutCalendar={displayCheckOutCalendar}
          handleCheckInClick={this.handleCheckInClick}
          handleCheckOutClick={this.handleCheckOutClick}
        />
      </div>
    );
  }

  render() {
    const { newReservation } = this.state;
    return (
      <Availability>
        <Header>Check Availability</Header>
        {newReservation ? this.renderForm() : this.renderSummary()}
      </Availability>
    );
  }
}

window.Calendar = App;

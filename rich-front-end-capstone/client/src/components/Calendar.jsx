import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Week from './Week';
import Header from './Header';
import generateDates from '../../utils/generateDates';

const Table = styled.table`
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #666;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  background: #fff;
  border: 1px solid #ccc;
  text-align: center;
  width: 100%;
  border-collapse: collapse;
`;
const Td = styled.td`
  border: 1px solid #ccc;
  background-color: #f4f4f4;
`;
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      month: moment().month(),
      year: moment().year(),
      dates: [],
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleDateSelection = this.handleDateSelection.bind(this);
  }

  componentDidMount() {
    const { checkIn } = this.props;
    const year = moment(checkIn).year();
    const month = moment(checkIn).month();
    const dates = generateDates(year, month);
    this.setState({
      year,
      month,
      dates,
    });
  }

  handleNext(e) {
    e.preventDefault();
    const { year, month } = this.state;
    const dateObject = moment([year, month]).add(1, 'month');
    const nextMonth = dateObject.month();
    const currentYear = dateObject.year();
    const dates = generateDates(currentYear, nextMonth);
    this.setState({
      month: nextMonth,
      year: currentYear,
      dates,
    });
  }

  handlePrev(e) {
    e.preventDefault();
    const { year, month } = this.state;
    const dateObject = moment.max(moment(), moment([year, month]).subtract(1, 'month'));
    const prevMonth = dateObject.month();
    const currentYear = dateObject.year();
    const dates = generateDates(currentYear, prevMonth);
    this.setState({
      month: prevMonth,
      year: currentYear,
      dates,
    });
  }

  handleDateSelection(date) {
    const month = moment(date).month();
    const year = moment(date).year();
    const dates = generateDates(year, month);
    this.setState({
      month,
      year,
      dates,
    });
  }

  render() {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const {
      year, month, currentDate, dates,
    } = this.state;
    const { bookedDates, handleNewDate, checkIn } = this.props;

    return (
      <div>
        <Header
          currentMonth={month}
          currentYear={year}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
        />
        <Table>
          <thead>
            <tr>{weekdays.map(day => <Td>{day}</Td>)}</tr>
          </thead>
          <tbody>
            {dates.map(week => 
              <Week week={week}
                month={month}
                currentDate={currentDate}
                bookedDates={bookedDates}
                handleNewDate={handleNewDate}
                handleDateSelection={this.handleDateSelection}
                checkIn={checkIn}/>)}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Calendar;

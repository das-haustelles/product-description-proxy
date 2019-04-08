import styled from 'styled-components';
import Dates from './Dates.jsx';

const WordWrapper = styled.span`
  color: #AEAEAE;
`;

const Wrapper = styled.section`
  background: white;
  margin-right: 5px;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDay: '',
      isCalendarClicked: false,
    }
    this.toggleCalendar = this.toggleCalendar.bind(this)
  }
  weekDays() {
    return (
      <div>
        <span> S </span>
        <span> M </span>
        <span> T </span>
        <span> W </span>
        <span> T </span>
        <span> F </span>
        <span> S </span>
      </div>
    )
  }
  getFirstDay() {
    var day = new Date();
    day.setDate(1);
    return day;
  }
  
  showMonth() {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months[this.getFirstDay().getMonth()];
  }

  clickNextMonth() {
  }

  clickPrevMonth() {
  }

  toggleCalendar() {
    this.setState({isCalendarClicked: !this.state.isCalendarClicked})
  }

  render() {
    const clickedCalendar = this.state.isCalendarClicked;

    if (clickedCalendar) {
      return (
        <Wrapper>
          <span onClick={this.toggleCalendar}>
            <span onClick={this.clickPrevMonth()}> Prev </span> 
              {this.showMonth()} <WordWrapper>{this.getFirstDay().getFullYear()}</WordWrapper>
              <span onClick={this.clickNextMonth()}> Next </span>
            <div></div>
            <div>{this.weekDays()}</div>
            <Dates firstday={this.getFirstDay()}/>
          </span>
        </Wrapper>
      )
    }
    else {
      return (
        <span onClick={this.toggleCalendar}>
          <WordWrapper>Cal Icon</WordWrapper>
        </span>
      )
    }
  }
}

export default Calendar;

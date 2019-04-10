import SearchInput from './components/SearchInput.jsx'
import Calendar from './components/Calendar.jsx'
import Groups from './components/Groups.jsx'

const Wrapper = styled.section`
  padding: 4em;
  background-color: #2B2A2A;
`;
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Wrapper>
        <SearchInput/>
        <Calendar/>
        <Groups/>
      </Wrapper>
    )
  }
}

export default App;

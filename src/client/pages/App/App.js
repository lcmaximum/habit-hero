import Day from '../../components/Day/Day';
import './App.css';

function App() {
  let today = new Date();
  let date=today.getDate();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  return (
    <div className="App">
     <Day month={month} date={date} year={year}/>
    </div>
  );
}

export default App;

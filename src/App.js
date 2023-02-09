import logo from './logo.svg';
import './App.css';
import DataAnalyticsTest from './DataAnalyticsTest/DataAnalyticsTest';

function App() {
  return (
    <div className="App">
      <DataAnalyticsTest name={"Soubhik"} testAttempted={true} testFail={false} testPass={true} testReattempted={false} isSessionBooked={false}/>
    </div>
  );
}

export default App;

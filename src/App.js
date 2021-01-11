//import logo from './logo.svg';
import './App.css';
import TraditionalCallBack from './TraditionalCallBack';
import PromissedCallBack from './PromissedCallBack';
import ACallBack from './ACallBack';

function App() {
  return (
    <div className="App-header">
      <b>Please inspect the page to see call back functions execution (Console tab of google chrome)</b>
      <div>
         
      <TraditionalCallBack />
      <PromissedCallBack />
      <ACallBack />
      
    </div>
    </div>
  );
}

export default App;


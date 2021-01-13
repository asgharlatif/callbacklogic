//import logo from './logo.svg';
import './App.css';
import TraditionalCallBack from './TraditionalCallBack';
import PromissedCallBack from './PromissedCallBack';
import ACallBack from './ACallBack';
import ProceduralProcess from './ProceduralProcess';

function App() {
  return (
    <div className="App-header">
      <b>Inspect the page to see call back functions execution (Console tab of google chrome)</b>
      <div>
         
      <TraditionalCallBack />
      <PromissedCallBack />
      <ACallBack />
      <ProceduralProcess />
      
    </div>
    </div>
  );
}


export default App;


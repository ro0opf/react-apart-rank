import React, {useState} from 'react';
import "./App.css"
import AutoCompleteText from './AutoCompleteText';
import apt from './apt'

function App(props) {
  const [hello, setHello] = useState(0);

  function handleHello(){
    setHello(hello + 1);
  }

  return (
    <div className="App">
      {hello}
      <div>
        {props.message}
      </div>
      <button onClick={handleHello}>
        Click me ee
      </button>
      <div className="App-Component">
        <AutoCompleteText items={apt}/>
      </div>
    </div>
  );
}

export default App;

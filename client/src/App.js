import React, {useState} from 'react';
import "./App.css"
import Head from './ui/Head';

function App(props) {
  return (
    <div className="App">
      <Head>
      </Head>
    </div>


    // <div className="App">
    //   <div>
    //     {props.message}
    //   </div>
    //   <Users></Users>
    //   <div className="App-Component">
    //     <AutoCompleteText items={res}/>
    //   </div>
    // </div>
  );
}

export default App;

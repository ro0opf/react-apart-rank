import React from 'react';
import "./App.css";
import Head from './ui/Head';
import TopNav from './ui/TopNav';
import Body from './ui/Body';
import Footer from './ui/Footer';

function App(props) {
  return (
    <div className="App">
      <Head/>
      <TopNav/>
      <Body/>
      <Footer/>
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

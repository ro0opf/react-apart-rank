import React, {useState} from 'react';
import "./App.css"
import ApartHead from './ui/ApartHead';
import AutoCompleteText from './AutoCompleteText';
import Users from './data/Users'
import res from './res.json'
import axios from 'axios'

const api = axios.create({
  baseURL : `https://jsonplaceholder.typicode.com/`
})

function App(props) {
  return (
    <div className="App">
      <ApartHead>
      </ApartHead>
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

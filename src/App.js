import React, { Component } from 'react';
import './App.css';
import A from './components/aa'; 
import B from './components/bb'; 
import C from './components/cc'; 


class App extends Component {
  render(){
    return (
      <div className="App">
        <A a="LapTime" b="Record Line"/>
        <B/>
        <C a="Spa" b="Spa is a fun but very dangerous circuit."/>
      </div>
    );
  }
}

export default App;

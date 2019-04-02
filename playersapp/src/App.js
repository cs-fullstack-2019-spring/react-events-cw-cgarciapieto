import React, { Component } from 'react';
import Players from "./Players"
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="App">


          <Players whichPlayer="1"/>
          <Players whichPlayer="2"/>
        </div>
    );
  }
}

export default App;
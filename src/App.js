import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
     
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="" className="banner" alt="logo" />
        </div>
        <h2 className="header"><img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Maille-Braize-canon.jpg"  className="canonImg" alt="head-image" width="100px"/>
        <span>BATTLESHIP</span>
        </h2>
        <p className="App-intro">

        </p>
        <div className="container">
              <div className="leftContainer">
                  <h2>user input</h2>
                  <input className="inputGrid" type="checkbox" />
              </div>
              <div className="rightContainer">
                <h2>BattleField</h2>
                 <div className="shipTypes">
                      <ul>
                          <li className="shipList"><div className="shipName">Destroyer</div><div className="shipBlock"/><div className="shipBlock"/><div className="shipBlock"/></li>
                          <li className="shipList"><div  className="shipName">Artillary Ship</div><div className="shipBlock"/><div className="shipBlock"/></li>
                          <li className="shipList"><div className="shipName">Survey Boat</div><div className="shipBlock"/></li>
                      </ul>
                 </div>
              </div>
        </div>
      </div>
    );
  }
}

export default App;

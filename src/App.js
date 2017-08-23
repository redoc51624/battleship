import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        date: new Date(),
        arr: []
      };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <h2 className="header">
          BATTLESHIP
        </h2>
        <p className="App-intro">

        </p>
        <div className="container">
              <div className="leftContainer">
                  <h2>Battlefield</h2>
                  <div className="matrix">
                     
                    {Array.apply(null, Array(6)).map(function(item, i){                                        
                    return (
                      <div className="matrixRow">
                         
                         {Array.apply(null, Array(6)).map(function(item, j){                                        
                         return (
                          <div>
                                 <div className="selected matrixGrid"></div>
                            </div>
                           );                
                        }, this)} 

                      </div>
                    );                
                }, this)} 
                  </div>
              </div>
              <div className="rightContainer">
                <h2>Battleships</h2>
                 <div className="shipTypes">
                      <ul>
                          <li className="shipList" onclick=""><div className="shipName">Destroyer</div><div className="shipBlock"/><div className="shipBlock"/><div className="shipBlock"/></li>
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

import React, { Component } from 'react';
import './App.css';
import GamePage2 from './GamePage2';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        date: new Date(),
        page1: false,
        page2: false,
        currentShipLen: 3,
        userShipPlotArr: [
        {id: '00', plotStatus:0 ,shipStatus:'0'},
        {id: '01', plotStatus:0 ,shipStatus:'0'},
        {id: '02', plotStatus:0 ,shipStatus:'0'},
        {id: '03', plotStatus:0 ,shipStatus:'0'},
        {id: '04', plotStatus:0 ,shipStatus:'0'},
        {id: '05', plotStatus:0 ,shipStatus:'0'},

        {id: '10', plotStatus:0 ,shipStatus:'0'},
        {id: '11', plotStatus:0 ,shipStatus:'0'},
        {id: '12', plotStatus:0 ,shipStatus:'0'},
        {id: '13', plotStatus:0 ,shipStatus:'0'},
        {id: '14', plotStatus:0 ,shipStatus:'0'},
        {id: '15', plotStatus:0 ,shipStatus:'0'},

        {id: '20', plotStatus:0 ,shipStatus:'0'},
        {id: '21', plotStatus:0 ,shipStatus:'0'},
        {id: '23', plotStatus:0 ,shipStatus:'0'},
        {id: '24', plotStatus:0 ,shipStatus:'0'},
        {id: '25', plotStatus:0 ,shipStatus:'0'},
        {id: '26', plotStatus:0 ,shipStatus:'0'},

        {id: '30', plotStatus:0 ,shipStatus:'0'},
        {id: '31', plotStatus:0 ,shipStatus:'0'},
        {id: '32', plotStatus:0 ,shipStatus:'0'},
        {id: '33', plotStatus:0 ,shipStatus:'0'},
        {id: '34', plotStatus:0 ,shipStatus:'0'},
        {id: '35', plotStatus:0 ,shipStatus:'0'},

        {id: '40', plotStatus:0 ,shipStatus:'0'},
        {id: '41', plotStatus:0 ,shipStatus:'0'},
        {id: '42', plotStatus:0 ,shipStatus:'0'},
        {id: '43', plotStatus:0 ,shipStatus:'0'},
        {id: '44', plotStatus:0 ,shipStatus:'0'},
        {id: '45', plotStatus:0 ,shipStatus:'0'},

        {id: '50', plotStatus:0 ,shipStatus:'0'},
        {id: '51', plotStatus:0 ,shipStatus:'0'},
        {id: '52', plotStatus:0 ,shipStatus:'0'},
        {id: '53', plotStatus:0 ,shipStatus:'0'},
        {id: '54', plotStatus:0 ,shipStatus:'0'},
        {id: '55', plotStatus:0 ,shipStatus:'0'},
        ]
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
      {this.state.page1
          ? 
        <div className="container">
              <h3>Plot your ships inside Battlefield</h3>
              <p>Note: Click once on ships then on Battlefield</p>
              <div className="leftContainer">
                  <h2>Battlefield</h2>
                  <div className="matrix">
                     
                    {Array.apply(null, Array(6)).map(function(item, i){                                        
                    return (
                      <div className="matrixRow">
                         
                         {Array.apply(null, Array(6)).map(function(item, j){                                        
                         return (
                          <div>
                                 <div id={j} className="matrixGrid" 
                                 onClick={() => this.plotShip(this, j)}
                                 value={this.state.userShipPlotArr[j].plotStatus}></div>
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
                          <li className="shipList" onClick={()=>this.shipSelected(this, 3)}>
                          <div id="3" className="shipName">Destroyer</div>
                              <div className="shipBlock"/>
                              <div className="shipBlock"/>
                              <div className="shipBlock"/>
                          </li>
                          <li className="shipList" onClick={()=>this.shipSelected(this, 2)}>
                            <div id="2" className="shipName">Artillary Ship</div>
                              <div className="shipBlock"/>
                              <div className="shipBlock"/>
                          </li>
                          <li className="shipList" onClick={()=>this.shipSelected(this, 1)}>
                            <div id="1" className="shipName">Survey Boat</div>
                            <div className="shipBlock"/>
                          </li>
                      </ul>
                 </div>
              </div>
        </div>

        : <GamePage2 />}
      </div>
    );
  }
  shipSelected(event, n) {
    var id = n;
    console.log("shipSelected data: "+event.target+ ": "+id);
    var ship = document.getElementById(id);
    console.log("ship: "+ship.value);
    ship.style.display = "none";
  }

  plotShip(event,data){
      console.log("plot data: "+event.target+ data);

  }

}

export default App;

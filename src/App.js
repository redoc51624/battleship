import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        date: new Date(),
        currentShipLen: 3,
        userShipPlotArr: [
        {id: '1', plotStatus:0 ,shipStatus:'0'},
        {id: '2', plotStatus:0 ,shipStatus:'0'},
        {id: '3', plotStatus:0 ,shipStatus:'0'},
        {id: '4', plotStatus:0 ,shipStatus:'0'},
        {id: '5', plotStatus:0 ,shipStatus:'0'},
        {id: '6', plotStatus:0 ,shipStatus:'0'},

        {id: '1', plotStatus:0 ,shipStatus:'0'},
        {id: '2', plotStatus:0 ,shipStatus:'0'},
        {id: '3', plotStatus:0 ,shipStatus:'0'},
        {id: '4', plotStatus:0 ,shipStatus:'0'},
        {id: '5', plotStatus:0 ,shipStatus:'0'},
        {id: '6', plotStatus:0 ,shipStatus:'0'},

        {id: '1', plotStatus:0 ,shipStatus:'0'},
        {id: '2', plotStatus:0 ,shipStatus:'0'},
        {id: '3', plotStatus:0 ,shipStatus:'0'},
        {id: '4', plotStatus:0 ,shipStatus:'0'},
        {id: '5', plotStatus:0 ,shipStatus:'0'},
        {id: '6', plotStatus:0 ,shipStatus:'0'},

        {id: '1', plotStatus:0 ,shipStatus:'0'},
        {id: '2', plotStatus:0 ,shipStatus:'0'},
        {id: '3', plotStatus:0 ,shipStatus:'0'},
        {id: '4', plotStatus:0 ,shipStatus:'0'},
        {id: '5', plotStatus:0 ,shipStatus:'0'},
        {id: '6', plotStatus:0 ,shipStatus:'0'},

        {id: '1', plotStatus:0 ,shipStatus:'0'},
        {id: '2', plotStatus:0 ,shipStatus:'0'},
        {id: '3', plotStatus:0 ,shipStatus:'0'},
        {id: '4', plotStatus:0 ,shipStatus:'0'},
        {id: '5', plotStatus:0 ,shipStatus:'0'},
        {id: '6', plotStatus:0 ,shipStatus:'0'},

        {id: '1', plotStatus:0 ,shipStatus:'0'},
        {id: '2', plotStatus:0 ,shipStatus:'0'},
        {id: '3', plotStatus:0 ,shipStatus:'0'},
        {id: '4', plotStatus:0 ,shipStatus:'0'},
        {id: '5', plotStatus:0 ,shipStatus:'0'},
        {id: '6', plotStatus:0 ,shipStatus:'0'},
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
      </div>
    );
  }
  shipSelected(event, n) {
    console.log("ship shipSelected data: "+event.target+ n);
  }

  plotShip(event,data){
      console.log("plot data: "+event.target+ data);
  }

}

export default App;

import React, { Component } from 'react';
import './App.css';

// var fighters = require('./fighters.json');
class Square extends React.Component {
  render() {
    return (
      <button className="Square">
         {/* TO DO */}
      </button>
    );
  }
}

class CharSelect extends Component {
  renderSquare(i) {
    return <Square />
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="grid-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="grid-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="grid-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div> 
      </div>
    );
  }
}

export default CharSelect;

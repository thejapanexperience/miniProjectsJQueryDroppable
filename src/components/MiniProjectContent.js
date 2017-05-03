import React from 'react';
import {Link} from 'react-router';
import Board from './Board';

class MiniProjectContent extends React.Component {

  constructor() {
  super()
  this.state = {
    knightPosition: [0,0]
  }
}
render() {

  setInterval(() =>
  {
    this.setState ({
      knightPosition : [
        Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8)
      ]
    })
  }
  , 10000);


  return (
    <div className="miniProjectContent">
      <Board knightPosition={this.state.knightPosition} />
    </div>
  );
}
}

export default MiniProjectContent;

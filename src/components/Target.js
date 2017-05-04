import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props) {}
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Target extends Component {

  constructor() {
  super()
  // this.state = {
  //   knightPosition: [1,7]
  // }
}
render() {
  let { backgroundColor, width} = this.props


  // return connectDropTarget(
  return (
    <div className="target" style={{ backgroundColor , width }}>
      Target
    </div>
  );
}
}

export default Target;
// export default DropTarget(ItemTypes.DRAGGABLE, squareTarget, collect)(Target);

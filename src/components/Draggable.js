import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DragSource, DragDropContext, DropTarget, DragLayer} from 'react-dnd';
import ItemTypes from './ItemTypes';


const draggableSource = {
  beginDrag(props) {
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

// @DragSource(ItemTypes.DRAGGABLE, draggableSource, collect)
export default class Draggable extends Component {

  constructor() {
  super()
  // this.state = {
  //   knightPosition: [1,7]
  // }
}

render() {
  const { connectDragSource, isDragging } = this.props;
  let color = this.props.backgroundColor
  console.log('color: ', color)

  return  (
  // return connectDragSource (
    <div className="draggable" style={{backgroundColor:color, opacity: isDragging ? 0.5 : 1
    }}>
      DragMe
    </div>
  );
}
}

// Draggable.propTypes = {
//   connectDragSource: PropTypes.func.isRequired,
//   isDragging: PropTypes.bool.isRequired
// };

// export default DragSource(ItemTypes.DRAGGABLE, draggableSource, collect)(Draggable);

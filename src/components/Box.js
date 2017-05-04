import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

let boxValue;

const boxSource = {
  beginDrag(props) {
    let { id, left, top, box } = props;
    boxValue = box
    console.log('id: ', id)
    console.log('left: ', left)
    console.log('top: ', top)
    let elBox = document.getElementById(`${box}`);
    console.log('elBox: ', elBox)
    console.log('elBox.offsetLeft: ', elBox.offsetLeft)
    if (isNaN(left)){
      left = elBox.offsetLeft;
      console.log('left: ', left)
    }
    if (isNaN(top)){
      top = elBox.offsetTop;
      console.log('top: ', top)
    }
    return { id, left, top };
  },
};

console.log('boxValue: ', boxValue);
if (boxValue = 'One'){

}

@DragSource(ItemTypes.BOXONE, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    left: PropTypes.any.isRequired,
    top: PropTypes.any.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  render() {

    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children, box } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    console.log('box: ', box)

    return connectDragSource(
        <div className="box" id={box} style={{ left, top }}>
          {children}
        </div>,
    );
  }
}

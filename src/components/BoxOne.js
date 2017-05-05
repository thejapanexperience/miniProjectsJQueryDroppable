import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const boxSource = {
  beginDrag(props) {
    let { id, left, top, box } = props;
    let elBox = document.getElementById(`${box}`);
    if (isNaN(left)){
      left = elBox.offsetLeft;
      console.log('left: ', left)
    }
    if (isNaN(top)){
      top = elBox.offsetTop;
      console.log('top: ', top)
    }
    return { id, left, top };
  }
};

@DragSource(ItemTypes.BOXONE, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class BoxOne extends Component {
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

    return connectDragSource(
        <div className="box" id={box} style={{ left, top }}>
          {children}
        </div>,
    );
  }
}

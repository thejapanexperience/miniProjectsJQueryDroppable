import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  // position: 'absolute',
  // backgroundColor: 'white',
  // padding: '0.5rem 1rem',
  // cursor: 'move',
  // width: '15%',
  // height: '80%',
  // margin: 'auto',
  // color: 'black',
  // fontSize: '16px',
};

const boxSource = {
  beginDrag(props) {
    console.log('in Box beginDrag');
    let { id, left, top } = props;
    if (isNaN(left)){
      left = 0;
    }
    if (isNaN(top)){
      top = 0;
    }
    console.log('left: ', left)
    // left == NaN ? left = 0 : left = left;
    return { id, left, top };
  },
};

@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    // id: PropTypes.any.isRequired,
    // left: PropTypes.string.isRequired,
    // top: PropTypes.string.isRequired,
    hideSourceOnDrag: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  componentWillUpdate(){
    console.log('componentWillUpdate');
    let elBox = document.getElementById("box");
    let elTarget = document.getElementById('target1')
    console.log('elBox.offsetLeft: ', elBox.offsetLeft)
    console.log('elTarget.offsetLeft: ', elTarget.offsetLeft)
  }


  render() {

    console.log('in Box render');
    const { hideSourceOnDrag, left, top, connectDragSource, isDragging, children } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    let position = document.getElement

    return connectDragSource(
        <div className="box" id="box" style={{ ...style, left, top }}>
          {children}
        </div>,
    );
  }
}

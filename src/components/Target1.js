import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import BoxOne from './BoxOne';

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    component.moveBox(item.id, left, top);
  },
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget([ItemTypes.BOXONE], boxTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
export default class Target1 extends Component {

  constructor(props) {

    super(props);
    this.state = {
      hideSourceOnDrag: true,
      boxes: {
        a: { top: props.top, left: props.left, title: props.title }
      },
    };
  }

  moveBox(id, left, top) {
    this.setState(update(this.state, {
      boxes: {
        a: {
          $merge: { left, top },
        },
      },
    }));
  }

render() {
  const { connectDropTarget } = this.props;
  let { backgroundColor, width, id, box, reset, resetLeft, resetTop, resetTitle, resetFunc } = this.props
  const { boxes } = this.state;
  console.log('boxes: ', boxes)

if (document.getElementById(id)) {
  let targetHeight = document.getElementById(id).offsetHeight;
  let targetWidth = document.getElementById(id).offsetWidth;

  let percentageLeft = boxes.a.left / targetWidth * 100
  let percentageTop = boxes.a.top / targetHeight * 100

  if (boxes.a.left <= targetWidth && boxes.a.top <= targetHeight){
    boxes.a.title = 'Well done!'
  }

  boxes.a.left = `${percentageLeft}%`
  boxes.a.top = `${percentageTop}%`
}

if (reset || boxes.a.left === 'NaN%') {
  boxes.a.left = resetLeft;
  boxes.a.top = resetTop;
  boxes.a.title = resetTitle;
}

  return connectDropTarget(
    <div className="target" id={id} style={{ backgroundColor , width }}>
      <div className="targetInner">
        <BoxOne
          box={box}
          id={id}
          left={boxes.a.left}
          top={boxes.a.top}
          hideSourceOnDrag={this.state.hideSourceOnDrag}
          color={'black'}
        >
          <div className="boxText">
            {boxes.a.title}
          </div>
        </BoxOne>
      </div>
    </div>
  );
}
}

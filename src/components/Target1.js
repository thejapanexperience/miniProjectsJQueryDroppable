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
    console.log('item.id: ', item.id)
    component.moveBox(item.id, left, top);
  },
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(ItemTypes.BOXONE, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
export default class Target1 extends Component {

  constructor(props) {
    console.log('in constructor for Target');
    console.log('props: ', props)
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
  const { backgroundColor, width, id, box } = this.props
  const { boxes } = this.state;

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
          {boxes.a.title}
        </BoxOne>
      </div>
    </div>
  );
}
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import Draggable from './Draggable';
import Box from './Box';

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

@DragDropContext(HTML5Backend)
@DropTarget(ItemTypes.BOX, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
export default class Target extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideSourceOnDrag: true,
      boxes: {
        a: { top: '25%', left: '125%', title: 'Drag me to the pink box' },
        b: { top: 180, left: 20, title: 'Drag me too' },
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
  const { backgroundColor, width, id} = this.props
  const { connectDropTarget } = this.props;
  const { boxes } = this.state;
  console.log('boxes: ', boxes)
  console.log(boxes.a);

  return connectDropTarget(
    <div className="target" id={id} style={{ backgroundColor , width }}>
      <div className="targetInner">
        <Box
          // className="box"
          // key={key}
          // id={key}
          left={boxes.a.left}
          top={boxes.a.top}
          hideSourceOnDrag={this.state.hideSourceOnDrag}
          color={'black'}
        >
          {boxes.a.title}
        </Box>
        {/* Target */}
      </div>
    </div>
  );
}
}

// export default Target;
// export default DropTarget(ItemTypes.DRAGGABLE, squareTarget, collect)(Target);

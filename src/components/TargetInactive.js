import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';

export default class TargetInactive extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

render() {
  const { backgroundColor, width, id} = this.props

  return (
    <div className="target" id={id} style={{ backgroundColor , width }}>
      <div className="targetInner">

      </div>
    </div>
  );
}
}

// export default Target;
// export default DropTarget(ItemTypes.DRAGGABLE, squareTarget, collect)(Target);
